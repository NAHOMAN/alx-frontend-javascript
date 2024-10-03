export default class Airport {
  constructor(name, code) {
    // Validate the inputs
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Assigning the attributes to underscore-prefixed variables
    this._name = name;
    this._code = code;
  }

  // Default string description of the class
  toString() {
    return `[object ${this._code}]`;
  }

  // Optional: You can also add a getter for better access
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
