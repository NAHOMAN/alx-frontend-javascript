export default class Building {
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    // Assign to the private _sqft property
    this._sqft = sqft;

    // Prevent direct instantiation of the abstract class
    if (new.target === Building) {
      throw new Error('Building class cannot be instantiated directly');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be overridden by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
