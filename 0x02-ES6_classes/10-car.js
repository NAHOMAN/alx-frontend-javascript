export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand; // Store brand in an underscore attribute
    this._motor = motor; // Store motor in an underscore attribute
    this._color = color; // Store color in an underscore attribute
  }

  // Method to clone the car object
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Optionally, you can add getters to access the attributes
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}
