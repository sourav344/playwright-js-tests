import { setWorldConstructor } from '@cucumber/cucumber';

export default class CustomWorld {
  constructor() {
    this.tickers = [];
    this.results = [];
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);
