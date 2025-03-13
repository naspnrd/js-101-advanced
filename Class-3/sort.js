// sort() method
// the sort method in JS is used to sort the elements of an array in-place
// and return the sorted array. By default, the sort() method sorts the elements alphabetically
// when applied to strings and numerically when applied to numbers.
// However, you can also provide a custom sorting function to define the sort order acc. to your need

// in-place(without using any extra space)/out-place(using extra space) -> Merge-sort is an inplace algo

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort();

// console.log(fruits);

// With Numbers
// using sort() without a compare function will not give the desired results when we try
// to sort array of numbers. becuase numbers will be converted to strings

// const nums = [31, 10, 5, 2, 4];
// nums.sort();
// console.log(nums);

// function compare(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }
// one liner
// ascending order
// function compare(a, b) {
//   return a - b;
// }

// descending order
// function compare(a, b) {
//   return b - a;
// }

console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));
