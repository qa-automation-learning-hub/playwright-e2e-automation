export const config = {
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
  timeout: Number(process.env.TEST_TIMEOUT || 30000),
};
