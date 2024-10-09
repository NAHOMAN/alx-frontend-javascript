// main.ts

// Importing the Subjects namespace
import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';
import { Teacher } from './Teacher';

// Create a Teacher object
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10, // Experience in teaching C++
};

// Create and export constants for each subject
const cpp = new Cpp();
const java = new Java();
const react = new React();

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
