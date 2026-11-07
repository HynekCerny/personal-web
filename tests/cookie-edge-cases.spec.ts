import { test, expect } from '@playwright/test';

test('privacy information is reachable without analytics', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Privacy & cookies' }).click();
  await expect(page.getByRole('heading', { name: 'Privacy & cookies', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'jsem@hynekcerny.cz', exact: true })).toBeVisible();
  expect(await page.locator('script[src*="googletagmanager"]').count()).toBe(0);
});

test('withdrawal in another tab stops an already loaded container', async ({ page, context }) => {
  await context.route('https://www.googletagmanager.com/**', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.goto('/');
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  const other = await context.newPage();
  await other.goto('/');
  await expect(other.locator('#consented-gtm')).toHaveCount(1);
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
  await expect(other.locator('#consented-gtm')).toHaveCount(0);
});

test('an open page stops analytics when its consent expires', async ({ page }) => {
  const now = Date.now();
  await page.clock.setSystemTime(now);
  await page.route('https://www.googletagmanager.com/**', route => route.fulfill({ contentType: 'application/javascript', body: '' }));
  await page.goto('/privacy');
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  await expect(page.locator('#consented-gtm')).toHaveCount(1);
  await page.clock.setSystemTime(now + 180 * 24 * 60 * 60 * 1000 + 10000);
  await page.evaluate(() => window.dispatchEvent(new Event('focus')));
  await expect(page.locator('#consented-gtm')).toHaveCount(0);
  await expect(page.getByRole('region', { name: 'Cookie preferences' })).toBeVisible();
});
