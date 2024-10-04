// HolbertonClass Definition
export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

// StudentHolberton Definition
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // Correct parameter usage
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass; // Correctly return the class reference
  }

  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Creating instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Creating instances of StudentHolberton
const students = [
  new StudentHolberton('Guillaume', 'Salva', class2020),
  new StudentHolberton('John', 'Doe', class2020),
  new StudentHolberton('Albert', 'Clinton', class2019),
  new StudentHolberton('Donald', 'Bush', class2019),
  new StudentHolberton('Jason', 'Sandler', class2019)
];

// Export the list of students
export const listOfStudents = students;
