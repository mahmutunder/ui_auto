// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests', // set your test directory path
  testMatch: '*.spec.ts', // set your test file pattern
  // ... other configurations
};

export default config;
