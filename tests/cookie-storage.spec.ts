import { test, expect } from '@playwright/test';

for (const [index, value] of ['invalid-json', JSON.stringify({ choice: 'granted', savedAt: 0 }), JSON.stringify({ choice: 'granted', savedAt: Date.now() + 86400000 })].entries()) {
  test(`invalid/expired consent fails closed: case ${index}`, async ({ page }) => {
    await page.addInitScript(value => localStorage.setItem('cookie-consent-v1', value), value);
    await page.goto('/');
    await expect(page.getByRole('region', { name: 'Cookie preferences' })).toBeVisible();
    await expect(page.locator('#consented-gtm')).toHaveCount(0);
  });
}

test('withdrawal survives readable storage whose writes fail', async ({ page }) => {
  await page.route('https://www.googletagmanager.com/**', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.goto('/');
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.addInitScript(() => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function(key, value) {
      if (this === localStorage) throw new DOMException('Quota exceeded', 'QuotaExceededError');
      return original.call(this, key, value);
    };
  });
  await page.reload();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Cookie settings', exact: true })).toBeVisible();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
});

test('withdrawal survives all storage writes and removals failing and permits later opt-in', async ({ page }) => {
  let analyticsRequests = 0;
  await page.route('https://www.googletagmanager.com/**', route => {
    analyticsRequests++;
    return route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await page.goto('/privacy?source=test#privacy');
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.addInitScript(() => {
    const setItem = Storage.prototype.setItem;
    const removeItem = Storage.prototype.removeItem;
    Storage.prototype.setItem = function(key, value) {
      if (key === 'cookie-consent-v1') throw new DOMException('Blocked', 'SecurityError');
      return setItem.call(this, key, value);
    };
    Storage.prototype.removeItem = function(key) {
      if (key === 'cookie-consent-v1') throw new DOMException('Blocked', 'SecurityError');
      return removeItem.call(this, key);
    };
  });
  await page.reload();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  const requestsBeforeWithdrawal = analyticsRequests;
  await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Cookie settings', exact: true })).toBeVisible();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Cookie settings', exact: true })).toBeVisible();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
  expect(analyticsRequests).toBe(requestsBeforeWithdrawal);
  expect(new URL(page.url()).searchParams.get('source')).toBe('test');
  expect(new URL(page.url()).hash).toBe('#privacy');
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('cookie-consent-v1')!).choice)).toBe('granted');
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  await expect(page.getByText('Analytics is currently off.', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.reload();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
});

test('unavailable storage fails closed and the banner fits the viewport', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } });
  });
  await page.goto('/');
  const banner = page.getByRole('region', { name: 'Cookie preferences' });
  await expect(banner).toBeVisible();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
  const box = await banner.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  expect(box!.y + box!.height).toBeLessThanOrEqual(page.viewportSize()!.height);
  await page.getByRole('button', { name: 'Reject analytics', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(banner).toBeVisible();
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
});
