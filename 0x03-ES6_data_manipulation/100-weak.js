export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is an object
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Get the current count for this endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the count is 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
