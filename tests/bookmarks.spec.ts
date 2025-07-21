import { test } from '../fixtures/classFixtures';
import { ApiCheckPage } from '../pages/api/govcheckGET';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test.describe('Verify services visibility', () => {
  test('Verify services titles', async ({ bookmarksPage }) => {
    await test.step('Titles are visible', async () => {
      await bookmarksPage.checkCitizenSectionVisibility();
      await bookmarksPage.checkBusinessSectionVisibility();
      await bookmarksPage.checkOfficialsSectionVisibility();
      await bookmarksPage.checkFarmersSectionVisibility();
    });
  });
});

test.describe('Verify services functionalities', () => {
  test('Verify services navigation', async ({ bookmarksPage }) => {
    await test.step('Check proper URL', async () => {
      await bookmarksPage.checkNavigationToFarmerUrl();
    });
  });
});
test.describe.only('Check with GET method', () => {
  test('Check only get method', async ({ apiCheckPage }) => {
    await test.step('Check GET method working', async () => {
      await apiCheckPage.checkInfoAboutTheHomePage();
    });
  });
});
