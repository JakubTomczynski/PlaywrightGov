import { test } from '../fixtures/classFixtures';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test.describe('Verify search bar visibility', () => {
  test('Verify header and important columns visibility', async ({ searchBar }) => {
    await test.step('Close cookies banner', async () => {
      await searchBar.searchBarIsVisible();
    });
  });
});

test.describe('Verify search bar functionalities', () => {
  test('Verify search bar input text functionality', async ({ searchBar }) => {
    await test.step('Input text and search for it', async () => {
      await searchBar.searchProperText('paszport');
      await searchBar.checkCounterValue();
    });
  });
});
