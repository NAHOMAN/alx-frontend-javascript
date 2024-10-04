export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator object to an array

  const employees = [...reportWithIterator];
  
  // Join all the employee names using the separator "|"
  return employees.join(' | ');
}
