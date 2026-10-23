import { test, expect } from '../../fixtures/index.js';
import { LoginPage } from '../../pages/login-page.js';
import { HomePage } from '../../pages/home-page.js';
import { testUsers } from '../../fixtures/auth.js';

test('user can open the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage('/');
  await loginPage.expectPageLoaded();
  await expect(page).toHaveTitle(/Swag Labs/i);
});

test('user can sign in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.openLoginPage();
  await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);

  await homePage.expectHomePageLoaded();
  await expect(page).toHaveURL(/inventory/i);
});

test('user sees error message for invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.login(testUsers.invalidUser.username, testUsers.invalidUser.password);

  await loginPage.expectLoginError('Username and password do not match any user in this service');
});
