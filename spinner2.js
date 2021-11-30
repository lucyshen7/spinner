const positions = '|/-\\|/-\\|';

let delay = 100;
for (const position of positions) {
  setTimeout(() => {
    process.stdout.write(`\r${position}   `);
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 200; // increment timeout delay by 50 ms
}

setTimeout(() => {
  process.stdout.write('   \n');
}, positions.length * 200);