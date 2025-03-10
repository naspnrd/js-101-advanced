/* 
Hoisting -> it is a phenomenon by which we can access the variables
and functions before we initialize it
*/

// console.log(x);
// var x = 10;
// console.log(x);
// foo();
// function foo() {
//   console.log("hello");
// }

// // hoisting
// function foo() {
//   console.log("hello");
// }
// var x;
// console.log(x);
// x = 10;
// console.log(x);
// foo();

// Q. Difference between var, let and const
// 1. var has function/local scope while let and const have block scope
// 2. Variables defined with var keyword hoisted at the top while let and const present in
// Temporal Dead Zone(TDZ)
// Diff between let and const is let defined variables can be reassigned while const can't

// Note : A varibale that is not declared using var will get hoisting but can't be
// referenced means present in temporal dead zone

console.log(x);
// console.log(y);
// debugger;
var x = 5;
let y = 6;
console.log(y);

// {
//   let z = 10;
// }

// Temporal DeadZone -> It is timespan between variable creation and it's initialization
// where they can't be accessed
// So, To avoid temporal deadzone -> keep in mind to always put declarations and initializations
// at the top of the scope, means we are shrinking the temporal deadzone window to zero

// Note: Js only hoists declarations not initialization
