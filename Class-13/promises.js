// A promise is commanly defined as a proxy for a value that will eventually
// become available.

// In layman terms, Promises in JS are similar to promises you make in real life.

// new Promise((resolve, reject) => {
//   resolve(1);
//   reject(1);
// });

// new Promise((resolve, reject) => {
//   resolve(1);
// }).then((result) => console.log(result));

// O/P
// 1

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//     // reject(2);
//   }, 2000);
// })
//   .then((result) => console.log("then--", result, promise))
//   //   .then(
//   //     (result) => console.log("then--", result), // onFulfilled
//   //     (error) => console.log("catch--", error) // onRejected
//   //   );
//   .catch((error) => console.log("catch--", error)) // internally calls then(_, onRejected)
//   .finally(() => console.log("finally--"));
// try {
// } catch (error) {
// } finally {
// }

// console.log(promise);

// ===============

// new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// }).then((result) => {
//   console.log("then--", result);
// });

// console.log(3);

// O/P
// 1
// 3
// then-- 2

// new Promise((resolve, reject) => {
//   resolve(1);
//   resolve(2);
//   reject(3);
// }).then((result) => {
//   console.log("then--", result);
// });

// ===============
// Promisifying Callback APIs

// function getCurrentPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getCurrentPosition()
//   .then((position) => console.log(position))
//   .catch((error) => console.log(error));

// ===============

console.log("start");
const p1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

p1.then((result) => {
  console.log("then--", result);
});
console.log("end");

// O/P
// start
// 1
// end
// then-- 2
