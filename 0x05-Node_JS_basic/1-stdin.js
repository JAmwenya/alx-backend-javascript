const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  // Handle the trailing carriage return for compatibility with the test
  const trimmedInput = input.replace(/\r$/, '');
  console.log(`Your name is: ${trimmedInput}\r`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
