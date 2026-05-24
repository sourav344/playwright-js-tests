export default class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async waitForElement(selector) {
    await this.page.waitForSelector(selector, { timeout: 60000 });
  }

  async takeScreenshot(name) {
    return this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }
}
