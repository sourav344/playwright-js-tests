import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import AnalystInsightsPage from '../../pages/AnalystInsightsPage.js';

Given('I have a list of stock tickers {string}', function (tickers) {
  this.tickers = tickers.split(',').map((t) => t.trim());
  this.results = [];
});

When('I scrape analyst recommendations from Yahoo Finance', async function () {
  const insightsPage = new AnalystInsightsPage(this.page);

  for (const ticker of this.tickers) {
    const result = await insightsPage.getAnalysisForTicker(ticker);
    this.results.push(result);
  }
});

Then('I should get AI-powered swing trading recommendations', function () {
  assert.strictEqual(
    this.results.length,
    this.tickers.length,
    'Expected recommendations for all tickers'
  );

  this.results.forEach((result) => {
    console.log(`${result.ticker}: ${result.recommendation} (bullishCount: ${result.bullishCount})`);
    assert.ok(result.recommendation, `Recommendation missing for ${result.ticker}`);
  });
});
