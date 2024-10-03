import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent Car constructor
    this._range = range; // Store range in an underscore attribute
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
