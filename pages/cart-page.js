import { expect } from '@playwright/test';
import { BasePage } from './base-page.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItem = this.page.locator('.cart_item');
    this.checkoutButton = this.page.getByRole('button', { name: /checkout/i });
    this.continueShoppingButton = this.page.getByRole('button', { name: /continue shopping/i });
  }

  async expectItemInCart() {
    await expect(this.cartItem).toHaveCount(1);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
