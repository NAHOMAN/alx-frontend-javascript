export default class Currency {
  constructor(code, name) {
    // Validate the type of code (should be a string)
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    // Validate the type of name (should be a string)
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Assign the validated attributes to underscore-prefixed properties
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code (with validation)
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name (with validation)
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display the full currency as "name (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
