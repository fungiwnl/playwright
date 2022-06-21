// example.spec.ts
import { test, expect } from '@playwright/test';

// Run tests in this describe block with portrait-like viewport.
test.use({ viewport: { width: 600, height: 900 } })

test('my portrait test', async ({ page }) => {;
     await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});