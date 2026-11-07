import { test, expect } from '@playwright/test';

test('minimal banner fits a short mobile screen with actions side by side', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  const banner = page.getByRole('region', { name: 'Cookie preferences' });
  await expect(banner).toBeVisible();
  const box = (await banner.boundingBox())!;
  expect(box.height).toBeLessThanOrEqual(160);
  expect((await banner.innerText()).length).toBeLessThan(180);
  const reject = page.getByRole('button', { name: 'Reject analytics', exact: true });
  const accept = page.getByRole('button', { name: 'Accept analytics', exact: true });
  await expect(accept).toHaveAccessibleName(/Accept/);
  const a = (await reject.boundingBox())!;
  const b = (await accept.boundingBox())!;
  expect(a.y).toBe(b.y);
  expect(a.height).toBeGreaterThanOrEqual(44);
  expect(b.x).toBeGreaterThan(a.x);
  expect(Math.abs((a.x + b.x + b.width) / 2 - (box.x + box.width / 2))).toBeLessThanOrEqual(1);
  await expect(banner).toContainText('With your consent, we use cookies to understand visits and improve this website.');
  await expect(banner).not.toContainText('Google Analytics');
  for (const button of [reject, accept]) {
    const styles = await button.evaluate(el => {
      const css = getComputedStyle(el);
      return { border: css.borderTopWidth, weight: css.fontWeight, shadow: css.boxShadow };
    });
    expect(styles.border).toBe('2px');
    expect(styles.weight).toBe('500');
    expect(styles.shadow).not.toBe('none');
  }
});

test('privacy details expand in place without leaving the page', async ({ page }) => {
  await page.goto('/');
  const details = page.getByRole('button', { name: 'Details', exact: true });
  await expect(page.getByRole('heading', { name: 'Privacy & cookies', exact: true })).toBeHidden();
  await details.click();
  await expect(details).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('heading', { name: 'Privacy & cookies', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'jsem@hynekcerny.cz', exact: true }).last()).toBeVisible();
  expect(new URL(page.url()).pathname).toBe('/');
  await details.click();
  await expect(page.getByRole('heading', { name: 'Privacy & cookies', exact: true })).toBeHidden();
  expect(await page.locator('#consented-gtm').count()).toBe(0);
});

test('privacy details use short plain-language information, not implementation details', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Details', exact: true }).click();
  const details = page.locator('#cookie-details');
  const text = await details.innerText();
  expect(text.trim().split(/\s+/).length).toBeLessThanOrEqual(170);
  expect(text).not.toMatch(/_ga|cookie-consent-v1|Tag Manager|session storage|URL|reload|fallback|advertising consent signals/i);
  for (const essential of ['Hynek Černý', 'Google Ireland Limited', 'consent', '180 days', 'two years', 'Cookie settings']) {
    expect(text).toContain(essential);
  }
  await expect(details.getByRole('link', { name: 'jsem@hynekcerny.cz' })).toHaveAttribute('href', 'mailto:jsem@hynekcerny.cz');
  await expect(details.getByRole('link', { name: /Google/ })).toHaveAttribute('href', 'https://policies.google.com/privacy');
  await expect(details.getByRole('link', { name: /Úřad/ })).toHaveAttribute('href', 'https://uoou.gov.cz/');
});
