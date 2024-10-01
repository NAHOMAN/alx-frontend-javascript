export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block-scoped variables
  let task2 = true;

  if (trueOrFalse) {
    task = true;     // Modify the existing block-scoped variables, no redeclaration
    task2 = false;
  }

  return [task, task2];
}
