import { test, expect } from '@playwright/test';
test.describe('Login Page Tests', () => {
  test('should display error message for invalid credentials', async ({ page }) => {
   await page.goto('/');
    
  });
  
});
