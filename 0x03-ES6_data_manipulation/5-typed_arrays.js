export default function createInt8TypedArray(length, position, value) {
  // Check if position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create a view of the buffer as an Int8Array
  const int8View = new Int8Array(buffer);

  // Set the value at the specified position
  int8View[position] = value;

  return int8View;
}
