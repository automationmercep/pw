import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true, 
  /* Fail the build on CI if you accidentally left test.only in the source code.  */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
 
  reporter: process.env.CI ? 'blob' : 'html',
 
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
