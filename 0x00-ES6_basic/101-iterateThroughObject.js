export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator object to an array using spread operator
 
	const employees = [...reportWithIterator];

  // Join all the employee names using ' | ' as a separator
  return employees.join(' | ');
}
