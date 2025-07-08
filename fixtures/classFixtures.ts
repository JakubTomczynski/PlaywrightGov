import { Page, test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Helper } from '../pages/common/helper';
import { SearchBar } from '../pages/searchBar';
import { BookmarksPage } from '../pages/bookmarksPage';

export const test = base.extend<{
  page: Page;
  homePage: HomePage;
  helper: Helper;
  searchBar: SearchBar;
  bookmarksPage: BookmarksPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  helper: async ({ page }, use) => {
    await use(new Helper(page));
  },
  searchBar: async ({ page }, use) => {
    await use(new SearchBar(page));
  },
  bookmarksPage: async ({ page }, use) => {
    await use(new BookmarksPage(page));
  },
});
