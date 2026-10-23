import { expect } from '@playwright/test';
import { BasePage } from './base-page.js';

export class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.pageHeading = this.page.getByRole('heading');
    this.inventoryList = this.page.locator('.inventory_list');
    this.addToCartButtons = this.page.getByRole('button', { name: /add to cart/i });
    this.cartLink = this.page.locator('.shopping_cart_link');
    this.cartBadge = this.page.locator('.shopping_cart_badge');
  }

  async expectDashboardVisible() {
    await expect(this.pageHeading).toBeVisible();
  }

  async expectInventoryVisible() {
    await expect(this.inventoryList).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async openCart() {
    await this.cartLink.waitFor({ state: 'visible' });
    await this.cartLink.click();
  }

  async expectItemAddedToCart() {
    await expect(this.cartBadge).toHaveText('1');
  }
}
