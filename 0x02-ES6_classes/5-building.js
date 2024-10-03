export default class Building {
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    // Assign the validated attribute to underscore-prefixed property
    this._sqft = sqft;

    // Ensure that this class cannot be instantiated directly
    if (new.target === Building) {
      throw new Error('Building class cannot be instantiated directly');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method that must be implemented by any class extending Building
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
