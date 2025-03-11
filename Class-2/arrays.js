// Arrays -> A Data Structure for storing a collection of multiple items under a
// single variable name

// Declaration
// let arr = new Array();
// let arr1 = []; // most commonly used and generally people prefer this one

// let fruits = ["Apple", "Mango"];
// //               0        1

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Mango
// console.log(fruits[2]); // undefined
// console.log(fruits[3]); // undefined
// console.log(fruits[13]); // undefined
// console.log(fruits.length);

// let arr = ["Apple", 2, true];

// console.log(typeof arr);

// console.log(Array.isArray(arr));

// let str = "abc";

// console.log(typeof str === "string");
// console.log(Array.isArray(str));

// pop and push method

// let arr = [1, 2];
// arr.push(3);

// console.log(arr);

// console.log(arr.pop());

// shift() -> removes the first element from an array and returns that element. The remaining
// elements indices are updated accordingly

// let arr = [1, 2, 3, 4];

// const removedVal = arr.shift();
// console.log(removedVal);
// console.log(arr);

// unshift() -> methods adds one or more elements to the beginning of an array and returns
// the new length of an array

// let arr = [1, 2, 3, 4];

// const newLength = arr.unshift(5, 6);

// console.log(newLength);
// console.log(arr);

// splice()
// i want to delete an element from an array
// delete operator

// let arr = [1, 2, 3, 4];

// delete arr[1];
// console.log(arr);

// splice method can do everything: insert, remove and replace elements

// syntax : arr.splice(start, deleteCount, elem1, elem2, ....)
// It modifies arr string from the index start: remove deleteCount
// elements and then insert elem1, elem2, ... at their place. Returns tha array

let arr = [1, 2, 3, 4];
//         0  1  2  3
//        -4 -3 -2 -1

// arr.splice(1, 1); // from index 1 remove 1 element
// arr.splice(1, 2); // from index 1 remove 2 element
// arr.splice(1, 2, 4, 5, 6); // from index 1 remove 2 element and insert 4, 5 and 6 at their place
// arr.splice(3, 2, 5, 6); // from index 3 remove 2 element and insert 5, 6 at their place
// console.log(arr);

// Negative indices allowed
arr.splice(-1, 0, 7, 8); // from index -1 (one step from end) delete 0 elements and
// insert 7 and 8
console.log(arr); // [1, 2, 3, 7, 8, 4]

// slice()
// arr.slice(start, end)
// It returns a new array copying to it all items from index start to end(not including the end).
// Both start and end can be negative

// const nums = [1, 2, 3, 4, 5]; // length = 5
// //            0  1  2  3  4

// // const slicedNums = nums.slice(1, 4); // Extracts elements from index 1 to 3
// const slicedNums = nums.slice(1); // end considered to be arr.length

// console.log(slicedNums); // [2, 3, 4, 5]

// Difference between slice and splice
// slice() returns new array containing the selected elements, leaving original array untouched.
// useful for extracting a portion of an array without modifying the original array

// splice() modifies the original array by removing or replacing exisitng elements. useful for
// making changes to array in place
