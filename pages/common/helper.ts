import { Page } from '@playwright/test';

export class Helper {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  selectors() {
    return {
      cookieBannerCloseButton: () => this.page.getByRole('button', { name: 'Akceptuję politykę dotycząca' }),
    };
  }
}
