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
    this._holbertonClass = holbertonClass; // Store the class reference
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass; // Correctly return the stored class reference
  }

  get fullStudentDescription() {
    // Return formatted string for student description
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Creating instances of HolbertonClass
const classes = {
  2019: new HolbertonClass(2019, 'San Francisco'),
  2020: new HolbertonClass(2020, 'San Francisco'),
};

// Creating instances of StudentHolberton
const studentNames = [
  ['Guillaume', 'Salva', classes[2020]],
  ['John', 'Doe', classes[2020]],
  ['Albert', 'Clinton', classes[2019]],
  ['Donald', 'Bush', classes[2019]],
  ['Jason', 'Sandler', classes[2019]]
];

// Using map to create an array of StudentHolberton instances
export const listOfStudents = studentNames.map(([firstName, lastName, holbertonClass]) => 
  new StudentHolberton(firstName, lastName, holbertonClass)
);
