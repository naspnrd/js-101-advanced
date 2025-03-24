// console.log(1);
// console.log(2);
// console.log(3);

// O/P
// 1
// 2
// 3

/* 
Why Async Js was Introduced?

JavaScript was initially designed to be a sync, single-threaded language, which means that tasks
were executed one after the other. However, as web applications become more complex, the need for 
non-blocking operations became apparent. This is where asynchronous JavaScript comes in. and improve the user
experience by allowing tasks to run in the bg, such as: 

- Fetching data from an API
- Reading files
- Setting timers
- Perfoming heavy computations without blocking the main thread
*/

// console.log("One!");
// console.log("Two!");
// function logThree() {
//   console.log("Three!");
// }

// function logThreeAndFour() {
//   logThree();
//   console.log("Four!");
// }

// logThreeAndFour();

// O/P
// One!
// Two!
// Three!
// Four!

// function longRunningTask() {
//   let count = 0;
//   // takkng more than seconds to run
//   for (let i = 0; i < 1e9 * 10; i++) {
//     count++;
//   }
//   console.log("Long Task completed");
// }

// function importantTask() {
//   console.log("Important Task completed");
// }

// longRunningTask();
// importantTask();
