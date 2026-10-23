import { test, expect } from '../../fixtures/index.js';
import { LoginPage } from '../../pages/login-page.js';
import { HomePage } from '../../pages/home-page.js';
import { CartPage } from '../../pages/cart-page.js';
import { CheckoutPage } from '../../pages/checkout-page.js';
import { testUsers } from '../../fixtures/auth.js';

test('end-to-end purchase flow works', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.openLoginPage('https://www.saucedemo.com/');
  await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);
  await homePage.expectHomePageLoaded();

  await homePage.addItemToCart('Sauce Labs Backpack');
  await homePage.openCart();
  await cartPage.expectItemInCart();
  await cartPage.proceedToCheckout();

  await checkoutPage.fillCustomerInfo('John', 'Doe', '10001');
  await checkoutPage.finishCheckout();
  await checkoutPage.expectOrderCompleted();

  await expect(page).toHaveURL(/checkout-complete/i);
});
