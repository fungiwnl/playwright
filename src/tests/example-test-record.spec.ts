import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.locator('input[name="search"]').click();

  // Fill input[name="search"]
  await page.locator('input[name="search"]').fill('test');

  // Click button:has-text("Search")
  await page.locator('button:has-text("Search")').click();
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Test');
});