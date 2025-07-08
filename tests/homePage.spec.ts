import { expect } from '@playwright/test';
import { test } from '../fixtures/classFixtures';
import { ENV } from '../globals/env';

test.beforeEach(async ({ homePage }) => {
  await homePage.goToHomePage();
});

test.describe('Verify main page - "gov.pl" visibility', () => {
  test('Verify header and important columns visibility', async ({ homePage }) => {
    await test.step('Close cookies banner', async () => {
      await homePage.closeCookiesBanner();
    });
    await test.step('Check header visibility', async () => {
      await homePage.govPLHeaderIsVisible();
    });
  });
});
