import { Page, expect } from '@playwright/test';
import { Helper } from './common/helper';
import { test } from '../fixtures/classFixtures';
import { ENV } from '../globals/env';

export class HomePage extends Helper {
  constructor(page: Page) {
    super(page);
  }
  selectors() {
    const Helper = super.selectors();
    const homePageSelectors = {
      govpl_header: () => this.page.locator('h1.govpl__header'),
      govpl_label: () => this.page.getByLabel('Strona główna gov.pl'),
      govpl_logo: () => this.page.locator('.govpl-logo'),
      cookieBannerContainer: {
        cookieBanner: () => this.page.locator('#cookies-info'),
        cookieBannerText: () => this.page.locator('#cookies-info .main-container'),
      },
    };
    return { ...homePageSelectors, ...Helper };
  }

  //Methods
  async goToHomePage() {
    await test.step('Go to home page', async () => {
      const response = await this.page.goto(`${ENV.BASE_URL}`);
      expect(response?.status()).toBe(200);
    });
  }
  async closeCookiesBanner() {
    const cookieBannerWholeText =
      'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki. Zobacz politykę cookies.';
    await expect(this.selectors().cookieBannerContainer.cookieBanner()).toHaveClass(/active/);
    await expect(this.selectors().cookieBannerContainer.cookieBanner()).toBeVisible();
    await expect(this.selectors().cookieBannerContainer.cookieBannerText()).toHaveText(cookieBannerWholeText);
    await this.selectors().cookieBannerCloseButton().click();
    await expect(this.selectors().cookieBannerContainer.cookieBanner()).toHaveClass('');
  }

  async govPLHeaderIsVisible() {
    await expect(this.selectors().govpl_header()).toBeVisible();
    await expect(this.selectors().govpl_label()).toHaveText('gov.pl');
    await expect(this.selectors().govpl_logo()).toBeVisible();
  }
}
