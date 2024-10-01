export default function iterateThroughObject(reportWithIterator) {
  // Use a while loop to iterate through the iterator
  let result = reportWithIterator.next(); // Get the first result

  // Continue until all employees have been iterated
  while (!result.done) {
    console.log(result.value); // Log the current employee
    result = reportWithIterator.next(); // Get the next employee
  }
}

