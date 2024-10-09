// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  // Index signature to allow additional attributes like contract
  [propName: string]: any;
}

// Create a Teacher object
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'New York',
  contract: false, // Extra attribute not explicitly defined
};

const teacher2: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
