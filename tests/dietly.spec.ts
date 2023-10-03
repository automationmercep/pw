import { test, expect } from '@playwright/test';

for (let i = 0; i < 30; ++i) {
  const url = 'https://dietly.pl/';
  test(`Test numer: '${i + 1 } ` + url, async ({ page }) => {
    const response = await page.goto(url);
    expect(response!.status()).toBe(200);
  });
}