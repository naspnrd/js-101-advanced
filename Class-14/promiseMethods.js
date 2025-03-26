// Promise.all() (all on none)
// Promise.all(iterable)

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

let p2 = 2; // Non Promise value // Promise.resolve(2)

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise 3 resolved");
    reject("Promise 3 rejected");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  resolve("Promise 4 resolved");
  //   reject("Promise 4 rejected");
});

// Promise.all([p1, p2, p3, p4])
//   .then((values) => {
//     console.log("All promises resolved", values);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// Promise.race() -> Similar to Promise.all() but waits only for first settled promise
// and gets its result or error

// Promise.race([p1, p3, p4])
//   .then((value) => {
//     console.log("First settled promise", value);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// Promise.any() -> Similar to Promise.race() but waits for first fulfilled promise and gets its result
// If all promises are rejected, then returned promise is rejected with AggregateError - a special error
// object that stores all promise errors in it's errors property

// Promise.any([p3, p4])
//   .then((value) => {
//     console.log("First fulfilled promise", value);
//   })
//   .catch((error) => {
//     console.log("Error", { error });
//     console.log(error.constructor.name);
//     console.log(error.errors[0]);
//     console.log(error.errors[1]);
//   });

// Promise.allSettled() -> It takes an array of promises and returns a single promise that resolves when
//  all of the given promises bhave either fulfilled or rejected, with an array fo objects

// {status: 'fulfilled', value: result}
// {status: "rejected", reason: error}

// Promise.allSettled([p1, p2, p3, p4])
//   .then((results) => {
//     console.log("All promises settled", results);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

Promise.resolve(1).then((value) => {
  console.log(value);
});

Promise.reject(2).catch((value) => {
  console.log(value);
});
