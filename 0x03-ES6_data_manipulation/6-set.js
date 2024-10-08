export default function setFromArray(array) {
  // Check if the argument is an array
  if (!Array.isArray(array)) {
    throw new Error('Argument must be an array');
  }
  
  // Return a Set created from the array
  return new Set(array);
}
