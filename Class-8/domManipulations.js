// function callMe() {
//   console.log("button clicked");
// }

// let container = document.getElementById("container");
// let btn = document.getElementById("btn");

// function createboldElement() {
//   let b = document.createElement("b");
//   b.innerHTML = "Neeraj <br/>";
//   container.appendChild(b);
// }

// // element.addEventListener(eventType, callbackkFunc, options)
// btn.addEventListener("click", createboldElement);

// element.removeEventListener(eventType, callbackkFunc, options)

// btn.removeEventListener("click", createboldElement);

// callbacks -> passing function to another function as an argument

// ========================== Event Object
// It is an object that contains info about an event that occurred on a DOM element. When an event is triggered,
// the browser creates an event object and passes it as an argument to the event handler function

// let container = document.getElementById("container");
// let btn = document.getElementById("btn");

// function createboldElement(event) {
//   console.log(event);
//   console.log("Event type: ", event.type);
//   console.log("target : ", event.target);
//   console.log("Current Target: ", event.currentTarget);
//   let b = document.createElement("b");
//   b.innerHTML = "Neeraj <br/>";
//   container.appendChild(b);
// }

// function listener1() {
//   console.log("listener 1");
// }

// element.addEventListener(eventType, callbackkFunc, options)
// btn.addEventListener("click", createboldElement);
// btn.addEventListener("click", listener1);
// btn.removeEventListener("click", listener1);

// imp properties
// type: :Returns the type of event that occurred
// target: Returns the element that triggered the event(the target of the event)
// currentTarget: Returns the element that the event listener is attached to
// preventDefault(): prevents the default action associated with the event
// stopPropagation(): Prevents further propagation of the current event in the capturing and bubbling phase

// ============================= Input Events

// const inp = document.querySelector("input");
// inp.addEventListener("focus", function () {
//   console.log("focused");
// });

// inp.addEventListener("blur", function () {
//   console.log("blurred");
// });

// // input event is fired synchronously when the value of <input>, <textarea> or <select> is changed
// inp.addEventListener("input", function () {
//   console.log("input event is triggered");
// });

// // change event
// // this event fires when the value of the input element changes and the element loses focus
// inp.addEventListener("change", function () {
//   console.log("change event is triggered");
// });

// Example

const students = [
  "Himanshu",
  "Kareena",
  "Likhith",
  "Nasir",
  "Yaseen",
  "Pallab",
];

const inp = document.querySelector("input");
const namesContainer = document.querySelector("#names-container");

// inp.addEventListener("input", function (event) {
//   const target = event.target;
//   const val = target.value;
//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(val.toLowerCase())
//   );
//   let ul = document.createElement("ul");
//   ul.innerText = "";
//   namesContainer.innerText = "";
//   filteredStudents.forEach((element, idx) => {
//     let li = document.createElement("li");
//     li.innerText = element;
//     ul.appendChild(li);
//   });
//   namesContainer.appendChild(ul);
// });

inp.addEventListener("change", function (event) {
  const target = event.target;
  const val = target.value;
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(val.toLowerCase())
  );
  let ul = document.createElement("ul");
  ul.innerText = "";
  namesContainer.innerText = "";
  filteredStudents.forEach((element, idx) => {
    let li = document.createElement("li");
    li.innerText = element;
    ul.appendChild(li);
  });
  namesContainer.appendChild(ul);
});
