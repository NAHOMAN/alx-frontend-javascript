export default function hasValuesFromArray(set, array) {
  // Check if the first argument is a Set and the second is an Array
  if (!(set instanceof Set)) {
    throw new Error('First argument must be a Set');
  }
  if (!Array.isArray(array)) {
    throw new Error('Second argument must be an Array');
  }

  // Check if all elements of the array are present in the set
  return array.every(element => set.has(element));
}
