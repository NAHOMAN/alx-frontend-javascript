export default function taskBlock(trueOrFalse) {
  let task = false;   // Use let to create a block-scoped variable
  let task2 = true;   // Use let for task2 as well

  if (trueOrFalse) {
    task = true;      // Update the existing variable
    task2 = false;    // Update the existing variable
  }

  return [task, task2];
}

