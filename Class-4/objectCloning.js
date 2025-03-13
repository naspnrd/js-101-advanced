//Call by value(primitive data types) vs call by reference(non primitive data type)

// let str = "Hello";
// let copy = str; // call by value
// copy = "hi";
// console.log(str); // Hello

// let obj = {
//   a: 1,
//   b: 2,
// };

// let objCopy = obj; // pass their reference
// objCopy.b = 4;

// console.log(obj);
// console.log(objCopy);

// How to solve it -> Cloning

// Object.assign() or spread(...) operator

// const person = { name: "Neeraj", age: 30 };

// let clone = Object.assign({}, person);
// let clone = { ...person };
// person.age = 25;
// console.log({ clone, person });

// =============Nested cloning

// let a = 10;
// let b = a;
// console.log(a === b); // true

const person = {
  name: "Neeraj", // cloned
  age: 30, // cloned
  // not cloned
  size: {
    height: 180, // not cloned
    weight: 80, // not cloned
  },
};

// let clone = Object.assign({}, person); // it does a shallow cloning

// console.log(person.size === clone.size); // true
// person.age++;
// person.size.height++;
// console.log(clone.size.height); // 181
// console.log(clone.age); // 30

// deep cloning
function deepCloning(input) {
  // var res = Array.isArray(input) ? [] : {};
  var res = {};
  // Base Condition
  if (typeof input !== "object") return input;

  for (let key in input) {
    res[key] = deepCloning(input[key]);
  }
  return res;
}

let clone = deepCloning(person);

console.log(person.size === clone.size);
person.age++;
person.size.height++;
console.log(clone.size.height);
console.log(clone.age);
