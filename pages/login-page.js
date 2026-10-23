import { expect } from '@playwright/test';
import { BasePage } from './base-page.js';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = this.page.getByLabel('Username');
    this.passwordInput = this.page.getByLabel('Password');
    this.loginButton = this.page.getByRole('button', { name: /log in|login/i });
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async openLoginPage() {
    await this.navigate('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoginError(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async expectPageLoaded() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }
}
