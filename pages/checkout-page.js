import { expect } from '@playwright/test';
import { BasePage } from './base-page.js';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = this.page.getByLabel('First Name');
    this.lastNameInput = this.page.getByLabel('Last Name');
    this.zipCodeInput = this.page.getByLabel('Zip/Postal Code');
    this.continueButton = this.page.getByRole('button', { name: /continue/i });
    this.finishButton = this.page.getByRole('button', { name: /finish/i });
    this.completeHeader = this.page.getByRole('heading', { name: /thank you for your order/i });
  }

  async fillCustomerInfo(firstName, lastName, zipCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async expectOrderCompleted() {
    await expect(this.completeHeader).toBeVisible();
  }
}
