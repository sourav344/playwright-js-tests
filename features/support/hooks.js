import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(60000);

Before({ timeout: 30000 }, async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After({ timeout: 15000 }, async function () {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
