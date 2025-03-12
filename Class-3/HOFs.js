// HOFs -> A function which takes another function as an argument
// or return a function from it known as HOF

// function x() {
//   console.log("Hello");
// }

// function y(x) {
//   x();
// }

// y();

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(Math.PI * radius[i] * radius[i]);
//   }
//   return out;
// };

// console.log(calculateArea(radius));
// const calculateCircumference = function (radius) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(2 * Math.PI * radius[i]);
//   }
//   return out;
// };

// console.log(calculateCircumference(radius));

// Optimisation using HOFs

// const radius = [3, 1, 2, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const calculate = function (radius, logic) {
//   const out = [];
//   for (let i = 0; i < radius.length; i++) {
//     out.push(logic(radius[i]));
//   }
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));

// map, filter and reduce method

// Array.prototype.map()
// It is used to do transformation on whole array

// const arr = [1, 4, 6, 7];

// double the array

// function double(x) {
//   return 2 * x;
// }

// map method will run double() for each and every value of arr and create a new array out of it

// const out = arr.map(double);
// console.log(out); // [2, 8, 12, 14]

// const out = arr.map(function (item) {
//   return item * 2;
// });

// console.log(out); // [2, 8, 12, 14]

// filter() -> It is used to filter the values inside an array

// const evenVal = arr.filter(function (item, index) {
//   return item % 2 === 0;
// });

// console.log(evenVal); // [4, 6]

// Array.prototype.reduce()
// It takes the values in an array from left to right and applies functionality such that
// it changes the array into one singular value
// Hence it reduces the array

// const arr = [1, 4, 6, 7];

// // syntax
// // const out = arr.reduce(function(accumulator, currentValue) {

// // }, initialValue)

// const out = arr.reduce(function (accumulator, currentValue) {
//   accumulator += currentValue;
//   return accumulator;
// }, 0);

// console.log(out);

// forEach() =-> executes a funct once for each value of an array

const arr = [1, 4, 6, 7];

// arr.forEach((currentValue, index) => {
//   console.log(currentValue);
// });

// inside forEach loop you can't use break or continue
// you can't not chain forEach loop like in case of map, filter and reduce

const out = arr
  .map((item) => item * 2) // [2, 8, 12, 14]
  .filter((item) => item > 10) // [12, 14]
  .reduce((acc, curr) => acc + curr); // [26]

console.log(out);
