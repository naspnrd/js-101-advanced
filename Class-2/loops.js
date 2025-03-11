// for loop
// syntax
// for (initialization; condition; increment / decrement) {}
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// while loop
// syntax
// initialization
// while (condition) {
//   // increment/decrement
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do-while loop

// do {
//   // this part will going to run atleast one
// } while (condition);

// do {
//   console.log("hello");
// } while (0);

// Simulating a dice roll until we get a 6

// let diceRoll = 0;

// while (diceRoll !== 6) {
//   diceRoll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${diceRoll}`);
// }

// console.log("You rolled a 6! Game over.");

for (let diceRoll = 0; diceRoll !== 6; ) {
  diceRoll = Math.floor(Math.random() * 6) + 1; // increment/decrement
  console.log(`Rolled: ${diceRoll}`);
}

console.log("You rolled a 6! Game over.");

// Both for and while loop can be used for the dice roll, but while is better choice because
// the number of iterations is unknown.
