export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  
  let taskInner;
  let task2Inner;

  if (trueOrFalse) {
    taskInner = true; 
    task2Inner = false;
  }

    return [task, task2];
}
