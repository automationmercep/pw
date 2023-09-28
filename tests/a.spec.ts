import { test, expect } from '@playwright/test';

for (let i = 0; i < 100; ++i) {
  const url = `https://dietly.pl/?${i + 1}`;
  test(url, async ({ page }) => {
    const response = await page.goto(url);
    expect(response!.status()).toBe(200);
  });
}