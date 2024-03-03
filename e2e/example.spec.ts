import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});

test('has ticket title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Tickets' }).click();
  await expect(page).toHaveTitle(/Lotto Checker/);
});

test('home page should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('tickets page should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/tickets');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('leetcode page should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/leetcode');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
