import path from 'path';
import * as reporter from 'cucumber-html-reporter';

const reportOptions = {
  theme: 'bootstrap',
  jsonFile: path.resolve('reports/cucumber-report.json'),
  output: path.resolve('reports/cucumber-report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
  name: 'Yahoo Finance Swing Trading Test Report',
  brandTitle: 'Playwright Cucumber Framework',
  metadata: {
    Browser: 'Chromium',
    Platform: process.platform,
    TestEnvironment: 'QA'
  }
};

reporter.generate(reportOptions);
console.log('Generated HTML report: reports/cucumber-report.html');
