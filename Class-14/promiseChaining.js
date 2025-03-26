// The whole thing works, because every call to a .then return a new promise, so that we
// we can call the next .then on it.

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// })
//   .then((result) => {
//     console.log("then--", result); // 1
//     return result * 2; // 1 * 2
//   })
//   .then((result) => {
//     console.log("then--", result); // 2
//     return result * 2; // 4
//   })
//   .then((result) => {
//     console.log("then--", result); // 4
//     // when not returning anything, .then always returns undefined that becomes
//     // value of .then on next promise
//   });
// so on...

// ===============

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 2000);
// });

// promise.then((result) => {
//   console.log("then--", result);
//   return result * 2; // 2
// });
// promise.then((result) => {
//   console.log("then--", result);
//   return result * 2;
// });
// promise.then((result) => {
//   console.log("then--", result);
//   return result * 2;
// });

// ===============

// Steps to Make a Sandwich
/*
Steps to Make a Sandwich
1. Get bread
2. Take the bread and add veggies.
3. If cheese is requested, add cheese. to bread and veggies.
4. If toast is requested, toast the sandwich.
5. Ask for toppings and then serve the sandwich
*/

// function getBread() {
//   return new Promise((resolve, reject) => {
//     let sandwich = [];
//     sandwich.push("bread");
//     console.log("Sandwich so far:", sandwich);
//     resolve(sandwich);
//   });
// }

// function addVeggies(sandwich) {
//   return new Promise((resolve, reject) => {
//     sandwich.push("veggies");
//     console.log("Sandwich so far:", sandwich);
//     resolve(sandwich);
//   });
// }

// function addCheese(sandwich, addCheese) {
//   return new Promise((resolve, reject) => {
//     if (addCheese) {
//       sandwich.push("cheese");
//     }
//     console.log("Sandwich so far:", sandwich);
//     resolve(sandwich);
//   });
// }

// function toastSandwich(sandwich, toast) {
//   return new Promise((resolve, reject) => {
//     if (toast) {
//       sandwich.push("toasted");
//     }
//     console.log("Sandwich so far:", sandwich);
//     resolve(sandwich);
//   });
// }

// function addToppingsAndServe(sandwich) {
//   return new Promise((resolve, reject) => {
//     let toppings = [
//       "lettuce",
//       "tomato",
//       "onion",
//       "jalapeno",
//       "mayo",
//       "mustard",
//       "salt",
//       "pepper",
//     ];
//     sandwich.push(toppings);
//     console.log("Sandwich so far:", sandwich);
//     resolve(sandwich);
//   });
// }

// getBread()
//   .then(addVeggies)
//   .then((sandwich) => addCheese(sandwich, true))
//   .then((sandwich) => toastSandwich(sandwich, true))
//   .then(addToppingsAndServe)
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// ========================

const prom1 = new Promise((resolve) => {
  resolve(1);
});

const prom2 = new Promise((resolve) => {
  resolve(2);
});
const prom3 = new Promise((resolve) => {
  resolve(3);
});
const prom4 = new Promise((resolve) => {
  resolve(4);
  prom2
    .then((res) => console.log(res))
    .then(() => prom3.then((res) => console.log(res)));
});
prom1.then((res) => console.log(res));
prom4.then((res) => console.log(res));

/* 
Things to keeo in mind: 
1. Executors(the callbacks of new Promise) are executed synchronously.
2. Promise reactions are the callbacks of somePromise.then(onFullfilled, onRejected):
    - If somePromise is already settled(fulfilled or rejected), on of the reactions is immediately added to 
      the microtask queue and executed later.
    - If somePromise is pending, the reactions are added to the internal lists .[[PromiseFulfillReactions]] 
      or .[[PromiseRejectReactions]]. and enqueued later when and if a promise is settled
*/
