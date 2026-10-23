import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';
import { HomePage } from '../pages/home-page.js';
import { testUsers } from './auth.js';

export const test = base.extend({
  authenticatedUser: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.openLoginPage('https://www.saucedemo.com/');
    await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);
    await homePage.expectHomePageLoaded();

    await use(homePage);
  },
});

export { expect };
