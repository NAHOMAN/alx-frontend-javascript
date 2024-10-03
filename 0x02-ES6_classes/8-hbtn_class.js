export default class HolbertonClass {
  constructor(size, location) {
    // Validate the inputs
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Assigning the attributes to underscore-prefixed variables
    this._size = size;
    this._location = location;
  }

  // When the class is cast into a Number, return the size
  valueOf() {
    return this._size;
  }

  // When the class is cast into a String, return the location
  toString() {
    return this._location;
  }
}
