import Car from './10-car.js';

const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this[rangeSymbol] = range; // Store range in a symbol
  }

  // Getter for range
  get range() {
    return this[rangeSymbol];
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }
}
