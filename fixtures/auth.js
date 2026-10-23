export const testUsers = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  invalidUser: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
};

export async function loginAsUser(page, username, password) {
  await page.goto('/');
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: /log in|login/i }).click();
}
