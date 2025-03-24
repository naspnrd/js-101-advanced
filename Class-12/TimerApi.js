// setTimeout(callbackFn, delay, ...arguments) - used to execute a function or piece of code after a specified delay

// console.log("Before setTimeout");

// let timerId = setTimeout(() => {
//   console.log("Runs after 2 seconds");
// }, 2000); // time in ms, 1000ms  = 1 sec

// console.log("After setTimeout");

// clearTimeout(timerId); // to cancel the setTimeout

// O/P
// Before setTimeout
// After setTimeout
// Runs after 2 seconds

// function greet(name, message) {
//   console.log(`Hello ${name}, ${message}! `);
// }

// setTimeout(greet, 2000, "Neeraj", "Good Morning");

// O/P
// Hello Neeraj, Good Morning!

// setInterval(function, delay, ...arguments) - used to execute a function or piece of code at specified intervals

// let count = 0;

// const intervalId = setInterval(() => {
//   count++;
//   console.log(`Interval count: ${count}`);
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// O/P
// Interval count: 1
// Interval count: 2
// Interval count: 3
// Interval count: 4
// Interval count: 5

// let start = 1;
// function countUp(name) {
//   console.log(`${name} says the count is ${start}`);
//   start++;
//   //   console.log(`${name} says the count is ${start}`);
// }

// const intervalId = setInterval(countUp, 1000, "Neeraj");

// Example

// console.log("start");

// setTimeout(() => {
//   console.log("Executed After 2 seconds");
// }, 2000);

// setTimeout(() => {
//   console.log("Executed After 1 seconds");
// }, 1000);

// console.log("end");

// Trust Issus with setTimeout
// setTimeout does not gurantee that cb func will be called execatly after specified delay, it might also take
// more than specified delay to execute the cb func. It all depends on the callstack.
// But it guarantees one thing that it will not execute before specified delay

// console.log("start");
// setTimeout(() => {
//   console.log("Executed After 0 seconds");
// }, 0);

// // some long running sync task getting executed and taking around 5seconds to execute
// console.log("end");

// =====
console.log("start");
setTimeout(() => {
  console.log("Executed After 0 seconds");
}, 0);

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  // 10 seconds delay
  endDate = new Date().getTime();
}
console.log("end");
