import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('has ticket title', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Tickets' }).click();
  await expect(page).toHaveTitle(/Tickets - Lotto Checker/);
});

test('tickets page should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/lotto_checker/tickets');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
