import { expect } from '@playwright/test';
import { BasePage } from './base-page.js';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.inventoryList = this.page.locator('.inventory_list');
    this.productCards = this.page.locator('.inventory_item');
    this.cartButton = this.page.locator('.shopping_cart_link');
    this.sortDropdown = this.page.locator('[data-test="product-sort-container"]');
  }

  async expectHomePageLoaded() {
    await expect(this.inventoryList).toBeVisible();
  }

  async addItemToCart(itemName) {
    const product = this.page.locator('.inventory_item', { hasText: itemName });
    await product.getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart() {
    await this.cartButton.waitFor({ state: 'visible' });
    await this.cartButton.click();
  }
}
