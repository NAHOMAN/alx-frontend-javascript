export default function updateUniqueItems(groceries) {
  // Check if the argument is a Map
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the entries of the Map
  for (const [item, quantity] of groceries) {
    // If the quantity is 1, update it to 100
    if (quantity === 1) {
      groceries.set(item, 100);
    }
  }

  // Return the updated Map
  return groceries;
}
