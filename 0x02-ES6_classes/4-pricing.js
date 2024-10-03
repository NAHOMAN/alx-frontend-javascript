// Importing the Currency class from 3-currency.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    // Validate the type of amount (should be a number)
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    // Validate the type of currency (should be an instance of Currency)
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    // Assign the validated attributes to underscore-prefixed properties
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount (with validation)
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency (with validation)
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to display the full price as "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    // Validate the input types
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
