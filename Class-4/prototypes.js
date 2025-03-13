// Own Method -> An own property is a property defined directly on the
// object and to list own properties

// Object.getOwnPropertyNames(obj);

// Inherited Method -> An inherited property is a property the object inherits from the
// prototype obj

// prototype and prototypal inheritance

// let arr = ["Neeraj", "Rahul"];

// arr.

// Array.prototype

// let obj = {
//     name: "Neeraj"
// }
// obj.

// Object.prototype

// This is all happens bcz of prototype
// When we create a js obj, js engine automatically without letting us know,
// attaches our obj with some hidden properties and methods and these
// are hidden properties and methods which we can access them by doing
// obj.
// function func() {

// }
// func.apply

//Function.prototype

// let num = 10
// num.

// Number.prototype

// let str ="neeraj"

// str.

// String.prototype

// let bool = true;
// bool.

// Boolean.prototype

// __proto__
// let arr = [];
// console.log(arr);
// function foo() {}
// console.log(arr.__proto__); // Array.prototype
// console.log(Array.prototype);

// console.log(arr.__proto__.__proto__); // Object.prototype
// console.log(Object.prototype);

// console.log(arr.__proto__.__proto__.__proto__); // null
// console.log(Object.prototype);

// console.log(foo.prototype); // Function.prototype
// console.log(Function.prototype);

// console.log(foo.__proto__.__proto__); // Object.prototype
// console.log(Object.prototype);

// ================================== Example

const tail = { hasTail: true };

const pet = { legs: 4, __proto__: tail };
const cat = { sount: "Meow", __proto__: pet };
const dog = { sount: "Bark", __proto__: pet };

// setPrototypeOf and getPrototypeOf
console.log(tail);
console.log(pet);
console.log(cat);
console.log(dog);
console.log(Object.getPrototypeOf(cat));
console.log(cat.hasTail); // true
