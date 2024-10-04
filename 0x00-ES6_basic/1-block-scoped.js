export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;  // Block-scoped variable
    const task2 = false; // Block-scoped variable
  }

  return [task, task2];
}
