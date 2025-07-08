import { Page, expect } from '@playwright/test';

export class SearchBar {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  selectors = {
    searchForm: () => this.page.locator('.search-form'),
    searchInput: () => this.page.locator('#query'),
    searchButton: () => this.page.getByRole('button', { name: ' Wyszukaj' }),
    searchCounter: () => this.page.locator('.search__counter'),
    searchCounterText: () => this.page.locator('.search__counter b'),
    periodDropdown: () => this.page.locator('.custom-multiselect--single'),
    unitDropdown: () => this.page.locator('#select-ministryid-button'),
    dropDownPeriodList: () => this.page.locator('#custom-select-period-dropdown'),
    unitDropDownList: () => this.page.locator('#custom-select-ministryid-dropdown'),
    searchResultsMessage: () => this.page.locator('.search-results__empty'),
  };

  //Methods
  async searchBarIsVisible() {
    await expect(this.selectors.searchForm()).toBeVisible();
  }

  async searchProperText(text: string) {
    await expect(this.selectors.searchInput()).toBeEnabled();
    await this.selectors.searchInput().click();
    await this.selectors.searchInput().fill(text);
    await expect(this.selectors.searchInput()).toHaveValue(text);
    await this.selectors.searchButton().click();
  }

  async checkCounterValue() {
    await this.selectors.searchCounterText().waitFor();
    const counterText = await this.selectors.searchCounterText().allInnerTexts();
    const count = parseInt(counterText[0]);
    expect(count).toBeGreaterThan(1);
  }

  async filterSearchResult() {
    const searchedText = 'Nie znaleziono wyników';
    await this.selectors.periodDropdown().click();
    await this.selectors.dropDownPeriodList().selectOption('Ostatnie 7 dni');
    await this.selectors.unitDropDownList().selectOption('100-lecie służby cywilnej');
    await expect(this.selectors.searchResultsMessage()).toHaveText(searchedText);
  }
}
