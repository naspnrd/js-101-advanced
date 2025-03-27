// async functions
// The word async before a function means one simple thinsg: a function
// always returns a promise.
// Other values are wrapped in a resolved promise automatically.

// async function f() {
//   return 1;
// }

// f().then(console.log); // 1

// async ensures that the function always returns a promise and wraps non-promise
// values in a resolved promise

// await
// The keyword await makes JavaScript wait until that promise settles and returns its result.
// It can only be used inside async functions.

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   });
//   let result = await promise; // wait until the promise resolves (*)
//   console.log(result);
// }
// f();

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolved Value!"), 10000);
// });

// async function handlePromise() {
//   console.log("Hello World!");
//   const result = await p;
//   console.log("hello everyone");
//   console.log(result);
//   const result2 = await p;
//   console.log("hello everyone");
//   console.log(result2);
// }

// handlePromise();
// console.log("end");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolved Value 1"), 10000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolved Value 2"), 5000);
// });

// async function handlePromise() {
//   console.log("Hello World!");
//   const result = await p1;
//   console.log("hello everyone");
//   console.log(result);
//   const result2 = await p2;
//   console.log("hello everyone");
//   console.log(result2);
// }

// handlePromise();
// console.log("end");

// const loadDiv = document.getElementById("loading");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolved Value 1"), 30000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Promise Resolved Value 2"), 60000);
// });

// isLoading = true;
// if (isLoading) {
//   loadDiv.style.display = "block";
// }
// async function handlePromise() {
//   console.log("Hello World!");
//   const result = await p1;
//   console.log("hello everyone");
//   console.log(result);
//   const result2 = await p2;
//   isLoading = false;
//   if (!isLoading) {
//     loadDiv.style.display = "none";
//   }
//   console.log("hello everyone");
//   console.log(result2);
// }

// handlePromise();
// console.log("end");

// async function getData() {
//   try {
//     const data = await new Promise((resolve, reject) => {
//       setTimeout(() => reject("error"), 3000);
//     });
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

async function getData() {
  // try {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 3000);
  });
  console.log(data);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  // }
}
getData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
