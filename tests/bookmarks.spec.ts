import { test } from '../fixtures/classFixtures';
import { ApiCheckPage } from '../pages/api/govcheckGET';
import { ProductInterfacePage } from '../pages/interface';
import { productApple, productOrange } from '../pages/interface';

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
test.describe('Check with GET method', () => {
  test('Check only get method', async ({ apiCheckPage }) => {
    await test.step('Check GET method working', async () => {
      await apiCheckPage.checkInfoAboutTheHomePage();
    });
  });
});

test.describe.only('Check avarege sume', () => {
  test('Check ino roz', async ({ helper }) => {
    await test.step('This is my test step', async () => {
      helper.sumProductPrice([productApple, productOrange]);
      helper.averageProductPrice([productApple, productOrange]);
      helper.iloczynProductPrice([productApple, productOrange]);
    });
  });
});
