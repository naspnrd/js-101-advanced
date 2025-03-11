// Lose Equality operator (==)
console.log(5 == "5"); // true (Number 5 is converted to string 5)
console.log("5" == "5"); // true (Number 5 is converted to string 5)
console.log("5" === "5"); // true (Number 5 is converted to string 5)
console.log(1 == true); // true (boolean true is converted to Number 1)
console.log(0 == false); // true (boolean false is converted to number 0)
console.log(null == undefined); // true (null and undefined are treated as equal)
console.log(0 == null); // false

// strict equality operator(===)

console.log(5 === "5"); // false (Number 5 is not equal to string 5)
console.log(1 === true); // false
console.log(0 === false); // false
console.log(null === undefined); // false

// Note: The only diff is == allows coercion in equality comparison while === don't
