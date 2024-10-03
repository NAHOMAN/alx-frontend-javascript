import Building from './Building.js';

class OfficeBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors; // Additional property for the subclass
  }

  // Implementing the abstract method
  evacuationWarningMessage() {
    return `Evacuate the ${this._floors} floors of the building!`;
  }
}

// Testing the subclass
const office = new OfficeBuilding(5000, 10);
console.log(office.sqft); // Output: 5000
console.log(office.evacuationWarningMessage()); // Output: Evacuate the 10 floors of the building!

// Uncommenting the following line will throw an error
// const building = new Building(3000); // Error: Building class cannot be instantiated directly

