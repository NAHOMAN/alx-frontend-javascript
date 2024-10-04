export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;  // Block-scoped variable
    let task2 = false; // Block-scoped variable
  }

  return [task, task2];
}
