class Building {
  constructor(sqft) {
    // Check if sqft is a number and greater than zero
    if (typeof sqft !== 'number' || sqft <= 0) {
      throw new Error('sqft must be a positive number');
    }
    this._sqft = sqft; // Store sqft as a private attribute
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // This method should be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building; // Export the Building class for use in other modules
