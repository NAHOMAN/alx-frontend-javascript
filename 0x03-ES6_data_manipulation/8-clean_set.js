export default function cleanSet(set, startString) {
  // Check if the first argument is a Set
  if (!(set instanceof Set)) {
    throw new Error('First argument must be a Set');
  }
  // Check if startString is a string
  if (typeof startString !== 'string') {
    return '';
  }

  // Create an array of strings that start with startString
  const resultArray = Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  // Join the array into a string separated by '-' and return it
  return resultArray.join('-');
}
