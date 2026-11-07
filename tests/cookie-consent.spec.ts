import { test, expect } from '@playwright/test';

test('no Google requests or cookies before a choice', async ({ page, context }) => {
  const googleRequests: string[] = [];
  await page.route(/google(tagmanager|.*analytics)\.com/, route => {
    googleRequests.push(route.request().url());
    return route.abort();
  });
  await page.goto('/');
  await expect(page.getByRole('region', { name: 'Cookie preferences' })).toBeVisible();
  await page.waitForTimeout(800);
  expect(googleRequests).toEqual([]);
  expect(await context.cookies()).toEqual([]);
  expect(await page.locator('script[src*="googletagmanager"]').count()).toBe(0);
});

test('explicit opt-in, remembered rejection and withdrawal control analytics', async ({ page, context }) => {
  const requests: string[] = [];
  await page.route('https://www.googletagmanager.com/**', route => {
    requests.push(route.request().url());
    // Controlled external script: emulate an analytics cookie, not the real GTM container.
    return route.fulfill({ contentType: 'application/javascript', body: 'document.cookie="_ga=test; path=/";' });
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('region', { name: 'Cookie preferences' })).toBeHidden();
  expect(requests).toEqual([]);
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  expect(await page.evaluate(() => Array.from(window.dataLayer[0] as IArguments))).toEqual([
    'consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied',
    },
  ]);
  await expect.poll(async () => (await context.cookies()).some(c => c.name === '_ga')).toBe(true);
  await page.reload();
  await expect.poll(() => requests.length).toBe(2);
  await page.getByRole('button', { name: 'Cookie settings', exact: true }).click();
  await Promise.all([
    page.waitForEvent('load'),
    page.getByRole('button', { name: 'Reject analytics', exact: true }).click(),
  ]);
  await expect(page.getByRole('button', { name: 'Cookie settings', exact: true })).toBeVisible();
  expect((await context.cookies()).filter(c => c.name.startsWith('_ga'))).toEqual([]);
  expect(requests).toHaveLength(2);
  expect(await page.locator('script[src*="googletagmanager"]').count()).toBe(0);
});
