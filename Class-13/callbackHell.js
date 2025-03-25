// setTimeout(() => {
//   console.log("first call back");
//   setTimeout(() => {
//     console.log("second call back");
//     setTimeout(() => {
//       console.log("third call back");
//       setTimeout(() => {
//         console.log("fourth call back");
//         setTimeout(() => {
//           console.log("fifth call back");
//           setTimeout(() => {
//             console.log("sixth call back");
//             setTimeout(() => {
//               console.log("seventh call back");
//               setTimeout(() => {
//                 console.log("eighth call back");
//                 setTimeout(() => {
//                   console.log("ninth call back");
//                 }, 1000);
//               }, 1000);
//             }, 1000);
//           }, 1000);
//         }, 100);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Steps to Make a Sandwich
/*
Steps to Make a Sandwich
1. Get bread
2. Take the bread and add veggies.
3. If cheese is requested, add cheese. to bread and veggies.
4. If toast is requested, toast the sandwich.
5. Ask for toppings and then serve the sandwich
*/

// Step 1: Function to get bread
function fnc1(fnc2) {
  // Initialize the sandwich array with bread
  let sandwich = [];
  sandwich.push("bread");
  console.log("Sandwich so far:", sandwich);
  fnc2(sandwich, fnc3);
}

// step 2: Function to add veggies
function fnc2(sandwich, fnc3) {
  sandwich.push("veggies");
  console.log("Sandwich so far:", sandwich);
  fnc3(sandwich, false, fnc4);
}

// step 3: Function to add cheese if requested
function fnc3(sandwich, cheese, fnc4) {
  if (cheese) {
    sandwich.push("cheese");
  }
  console.log("Sandwich so far:", sandwich);
  fnc4(sandwich, true, fnc5);
}

// step 4: Function to toast the sandwich if requested
function fnc4(sandwich, toast, fnc5) {
  if (toast) {
    sandwich.push("toasted");
  }
  console.log("Sandwich so far:", sandwich);
  fnc5(sandwich);
}

// step 5: Function to ask for toppings and serve the sandwich
function fnc5(sandwich) {
  let toppings = [
    "leetuce",
    "tomato",
    "onion",
    "jalapeno",
    "mayo",
    "sweet onio",
  ];
  sandwich.push(...toppings);
  console.log("Sandwich so far:", sandwich);
  console.log("Sandwich is ready to be served:", sandwich);
}

// start the sandwich making process

fnc1(fnc2);
