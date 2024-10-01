export default function taskBlock(trueOrFalse) {
  const task = false;   // Use let to create a block-scoped variable
  const task2 = true;   // Use let for task2 as well

  if (trueOrFalse) {
   let task = true;      // Update the existing variable
   let task2 = false;    // Update the existing variable
  }

  return [task, task2];
}
