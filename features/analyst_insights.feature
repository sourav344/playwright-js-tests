Feature: Swing Trading Stock Analysis
  As a swing trader
  I want to scrape analyst recommendations from Yahoo Finance
  To get AI-powered swing trading recommendations

  Scenario Outline: Get AI-powered swing trading analysis
    Given I have a list of stock tickers "<tickers>"
    When I scrape analyst recommendations from Yahoo Finance
    Then I should get AI-powered swing trading recommendations

    Examples:
      | tickers |
      | AAPL, TSLA |
