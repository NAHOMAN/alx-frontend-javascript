export default function iterateThroughObject(reportWithIterator) {
  // Use the spread operator to gather all items from the iterator
  const employees = [...reportWithIterator];

  // Join the employee names with ' | ' as the separator
  return employees.join(' | ');
}
