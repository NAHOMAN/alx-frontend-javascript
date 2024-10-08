export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Check if position is within the valid range
  if (position < 0 || position >= buffer.byteLength) {
    throw new Error('Position outside range');
  }

  // Create a view of the buffer as an Int8Array
  const int8View = new Int8Array(buffer);

  // Using a try-catch block for setting the value
  try {
    int8View[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }

  return int8View;
}
