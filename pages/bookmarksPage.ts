import { test } from '../fixtures/classFixtures';
import { Page, expect } from '@playwright/test';

export class BookmarksPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  selectors = {
    servicesForCitizen: () => this.page.locator('#govpl-i-services_for_citizens'),
    servicesForBusiness: () => this.page.locator('#govpl-i-services_for_business'),
    servicesForOfficials: () => this.page.locator('#govpl-i-services_for_officials'),
    servicesForFarmers: () => this.page.locator('#govpl-i-services_for_farmers'),
  };

  //Methods
  async checkCitizenSectionVisibility() {
    await expect(this.selectors.servicesForCitizen()).toBeVisible();
    await expect(this.selectors.servicesForCitizen()).toContainText('Usługi dla obywatela');
  }

  async checkBusinessSectionVisibility() {
    await expect(this.selectors.servicesForBusiness()).toBeVisible();
    await expect(this.selectors.servicesForBusiness()).toContainText('Usługi dla przedsiębiorcy');
  }

  async checkOfficialsSectionVisibility() {
    await expect(this.selectors.servicesForOfficials()).toBeVisible();
    await expect(this.selectors.servicesForOfficials()).toContainText('Usługi dla urzędnika');
  }

  async checkFarmersSectionVisibility() {
    await expect(this.selectors.servicesForFarmers()).toBeVisible();
    await expect(this.selectors.servicesForFarmers()).toContainText('Usługi dla rolnika');
  }

  async checkNavigationToFarmerUrl() {
    await this.selectors.servicesForFarmers().click();
    await expect(this.page).toHaveURL('https://www.gov.pl/web/gov/uslugi-dla-rolnika');
  }
}
