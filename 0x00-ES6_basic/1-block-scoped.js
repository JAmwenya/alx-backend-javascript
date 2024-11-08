export default function taskBlock(trueOrFalse) {
  const task1 = false;
  const task2 = true;

  if (trueOrFalse) {
    let task1 = true;
    let task2 = false;
  }

  return [task1, task2];
}
