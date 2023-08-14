import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fromCurrency: string = 'USD';
  toCurrency: string = 'USD';
  amount: number = 0;
  conversionResult: string = '';

  convert() {
    const exchangeRates = {
      USD: 1.126735,
      GBP: 0.876893,
      INR: 79.677056
    };

    const fromRate = exchangeRates[this.fromCurrency];
    const toRate = exchangeRates[this.toCurrency];

    if (fromRate && toRate) {
      const convertedAmount = (this.amount / fromRate) * toRate;
      this.conversionResult = `Converted Amount: ${convertedAmount.toFixed(2)} ${this.toCurrency}`;
    } else {
      this.conversionResult = 'Invalid currency selection.';
    }
  }
}
