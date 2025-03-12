// Function Statement/Declaration vs Function Expression

// function statement

// function abc() {
//   console.log("abc is called");
// }

// abc();

// function expression

// var b = function () {
//   console.log("b is called");
// };

// b();

// Major diff is hoisting, if we call both the functions before initialisation then
// abc will be hoisted at top and will executer while b will throw the error(type error)

// abc();
// b();
// function abc() {
//   console.log("abc is called");
// }

// var d = 10;

// var b = function () {
//   console.log("b is called");
// };

// Anonymous Functions -> A function without a name is anonymous function
// Anounymous functions are used in a place where functions are used as values
// UseCases
// 1. HOFs(Higher order functions)
// 2. Event Listeners
// 3. IIFE(Immediately invoked functions)
// 4. async executions
// 5. Arrow functions as anonymous functions

// Benefits
// 1. Reduce Global Scope Pollution
// var b = function () {
//   // anonymous function
//   console.log("b is called");
// };

// Named Function expression

// var b = function xyz() {
//   // in this scenario xyz is not created / no memory is given to it
//   // in global scope but created as a local variable
//   //   console.log("b is called");
//   console.log(xyz);
// };

// // xyz();
// b();

// Diff between arguments and parameters

// function parameters are the names listed in the function definition
// function arguments are the real values passed to the function

// param1, param2 are the parameters
// function abc(param1, param2) {}

// 1 and 2 are arguments
// abc(1, 2);

// First class function/citizens
// Ability to used like values
// A programming language is said to be have first class func when functions in that lang
// are treated like any other variable.
// Ex- a function can be passed as an argument to other function, can be returned by another
// function and can be assigned as a value to a variable

// arrow functions -> An arrow function expression is an anonymous function expression written
// with the fat arrow (=>)
// => (token) -> fat arrow

function sum(a, b) {
  return a + b;
}

var sum = (a, b) => {
  return a + b;
};

// one liner
var sum = (a, b) => a + b;

// HW
// IIFE
// Pure vs Impure function
