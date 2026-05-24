import BasePage from './BasePage.js';

export default class AnalystInsightsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async getAnalysisForTicker(ticker) {
    const url = `https://finance.yahoo.com/quote/${ticker}/analyst-insights/`;
    await this.goto(url);

    let recommendation = 'N/A';
    let bullishCount = 0;
    try {
      await this.waitForElement("table[class*='markets-table']");
      await this.page.locator("table[class*='markets-table']").scrollIntoViewIfNeeded();
      bullishCount = await this.page.locator("table[class*='markets-table'] div[class*='bullish']").count();
      console.log(`bullishCount: ${bullishCount}`);
      recommendation = bullishCount > 5 ? 'Strong Buy' : 'Strong Sell';
    } catch (e) {
      // Recommendation not found
      console.error(`Error scraping for ${ticker}: ${e.message}`);
    }

    return {
      ticker,
      recommendation,
      bullishCount,
      source: 'Yahoo Finance'
    };
  }
}
