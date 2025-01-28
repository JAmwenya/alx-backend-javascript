const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

//flag to ensure input processing doesn't end prematurely
let hasResponded = false;

rl.on('line', (input) => {
  if (!hasResponded) {
    console.log(`Your name is: ${input}`);
    hasResponded = true; // Ensuring only the first input is processed
    rl.close();
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
