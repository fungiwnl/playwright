import { test, expect } from '@playwright/test';
import { BasePage, HomePage } from '../pages';

test('basic test that uses pom', async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goto();

  const homePage = new HomePage(page);
  await homePage.getStarted();

  await expect(page.locator('h1')).toContainText('Getting started');
});