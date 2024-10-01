export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees); // Get the arrays of employees from the report
  const flattenedEmployees = employees.flat(); // Flatten the array of arrays

  // Use a generator function to create the iterator
  function* employeeIterator() {
    for (const employee of flattenedEmployees) {
      yield employee; // Yield each employee one by one
    }
  }

  return employeeIterator(); // Return the generator function
}
