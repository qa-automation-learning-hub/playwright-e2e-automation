export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}
