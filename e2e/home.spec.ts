import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('home page should not have automatically detectable accessibility violations', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/lotto_checker/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
