// const singleQuotes = "neeraj"; // prettier (code formatter)
// const doubleQuotes = "neeraj";

// const backticks = `Hello ${doubleQuotes}`; // tempral literals

// throw error for multiline
// let guestList = "neeraj
// JavaScript instructor
// "

// let guestList = `neeraj
// JavaScript instructor
// *--
// *99
// `;

// console.log(guestList);

// string methods

// length

// const str = "Neeraj";
// console.log(str.length); // 6

// slice(startIndex, endIndex);
// Extract a section of a string and returns it as a new string

// const str = "Hello, World!";

// console.log(str.slice(7, 12)); // World

// replace(searchValue, replaceValue) and replaceAll(searchValue, replaceValue)
// replace single occurence of a specified value in a string

// console.log(str.replace("World", "Universe"));

// replaceAll replaces all occurrences using a regular expression instead of a string

// regular expression (RegEx)
// it is a powerful patterns used to match and manipulate text

// regexp = /pattern/gim; // gim -> known as flags

// i -> case-insensitive
// g -> looks for all matches
// and so on

// console.log(str.replaceAll(/o/g, "0"));

// toUpperCase() and toLowerCase()

// const str = "hello world";

// console.log(str.toUpperCase());

// const str = "HeLLo wOrld";

// console.log(str.toLowerCase());

// trim()
// removes whitespaces from both end of string

// const str = "    Hello, World!     ";

// console.log(str.trim());

// ASCII value of alphabet
// charCodeAt(index)

// const str = "hello";
// console.log(str.charCodeAt(1));

// split(separator, limit(optional value))
// splits a string into an array of substrings based on separator
const str = "Neeraj,Chaudhary";
console.log(str.split(","));
console.log(str.split(""));
console.log(str.split("."));
