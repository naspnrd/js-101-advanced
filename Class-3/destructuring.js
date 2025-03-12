// const arr = ["Neeraj", "Chaudhary"];

// // const firstName = arr[0];
// // const lastName = arr[1];

// const [firstName, lastName] = arr;
// console.log(firstName, lastName);

// const nestedArray = [1, [2, 3], 4];
// // const [a, [b, c], d] = nestedArray;
// const [a, x, d] = nestedArray;
// const [b, c] = x;

// console.log(a, b, c, d);

// spread operator(...) -> It unpacks into individual elements

// const arr = [1, 2, 3];

// console.log(arr);
// console.log(...arr);

// const first = [1, 2];
// const second = [3, 4];

// const third = [...first, ...second];

// console.log(third);

// const arr = [1, 2, 3];

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...arr));

// rest operator(...) -> It collects all the remaining elements into an array

// const nestedArray = [1, [2, 3], 4];
// const [a, ...rest] = nestedArray;
// console.log(a, rest);

const arr = [1, 2, 3, 4, 5, 6];

function sum(a, b, ...rem) {
  console.log(rem);
  return a + b;
}

console.log(sum(...arr));
