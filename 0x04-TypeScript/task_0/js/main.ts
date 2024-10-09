// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Bond',
  age: 30,
  location: 'London',
};

// Create an array named studentsList
const studentsList: Array<Student> = [student1, student2];

// Render a table using vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
