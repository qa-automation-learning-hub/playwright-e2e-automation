import { expect } from '@playwright/test';

export async function expectText(page, text) {
  await expect(page.locator('body')).toContainText(text);
}
