export default class Building {
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    // Assign to the private _sqft property
    this._sqft = sqft;

    // Ensure that the class cannot be instantiated directly
    if (new.target === Building) {
      throw new Error('Building class cannot be instantiated directly');
    }
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
