import { test, expect } from '../../fixtures/index.js';
import { LoginPage } from '../../pages/login-page.js';
import { HomePage } from '../../pages/home-page.js';
import { CartPage } from '../../pages/cart-page.js';
import { testUsers } from '../../fixtures/auth.js';

test('checkout flow starts from the products page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await loginPage.openLoginPage('https://www.saucedemo.com/');
  await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);
  await homePage.expectHomePageLoaded();

  await homePage.addItemToCart('Sauce Labs Backpack');
  await homePage.openCart();
  await cartPage.expectItemInCart();

  await expect(page).toHaveURL(/cart/i);
});
