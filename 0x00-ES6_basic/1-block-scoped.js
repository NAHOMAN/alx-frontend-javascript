export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const as this value should not change
  const task2 = true;  // Use const here as well

  if (trueOrFalse) {
    const task = true;  // Use const inside the block to create new block-scoped variables
    const task2 = false;
    return [task, task2];  // Return block-scoped values if trueOrFalse is true
  }

  return [task, task2];  // Return original values if trueOrFalse is false
}
