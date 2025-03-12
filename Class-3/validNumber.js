/* 
a function is taking no. as a string we have to validate it .
1,000 is valid 
10,00 is invalid
*/

function isValidNumberString(str) {
  if (!str || typeof str !== "string") return false;

  const parts = str.split(",");
  // the first part should have at most 3 digit
  if (parts[0].length > 3 || isNaN(parts[0])) return false;

  // all subsequent parts must have exactly 3 digit
  for (let i = 1; i < parts.length; i++) {
    if (parts[i].length !== 3 || isNaN(parts[i])) return false;
  }
  return true;
}

console.log(isValidNumberString("1,000")); // true
console.log(isValidNumberString("10,000")); // true
console.log(isValidNumberString("100,000,000")); // true
console.log(isValidNumberString("999,999,999")); // true
console.log(isValidNumberString("1")); // true
console.log(isValidNumberString("100")); // true
console.log(isValidNumberString("10")); // true

console.log(isValidNumberString("10,00")); // false
console.log(isValidNumberString("1,00,000")); // false
console.log(isValidNumberString(",1000")); // false
console.log(isValidNumberString("1,,000")); // false
console.log(isValidNumberString("abc,123")); // false
console.log(isValidNumberString("123456")); // false
