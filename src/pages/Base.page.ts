import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly testUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.testUrl = 'https://playwright.dev'
  }

  async goto() {
    await this.page.goto(this.testUrl);
  }
}