// let num = 10; // number
// let str = "Hello"; // string
// let bool = true; // boolean
// let n = null; // null
// let u = undefined; // undefined
// let sym = Symbol(); // symbol

// // non-primitive
// let obj = {
//   key: "value",
// };

// Mutable values are those which can be modified after creation
// Immutable values are those which can not be modified after creation

// Primitive values are immutable while Non-primitive are mutable
// Primitives are stored by value while Non-primitive are stored by reference

// typeOf Operator-> tells the type of data type

// console.log(typeof bool);
// console.log(typeof obj);

let str = "neeraj"; // immutable

console.log(str[0]);

str[0] = "N";
str = "Neeraj"; // reassigning
console.log(str);

let obj = {
  name: "neeraj",
};

let arr = ["n", "e", "e", "r", "a", "j"];
arr[0] = "N"; // mutable
obj.name = "Neeraj"; // mutable
