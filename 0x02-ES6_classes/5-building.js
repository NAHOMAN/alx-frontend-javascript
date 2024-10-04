class Building {
  constructor(sqft) {
    this._sqft = sqft; // Store sqft in a private variable
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to enforce subclass implementation
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
