// // Access Element by ID: This method retrieves an element by its unique ID attribute

// const elementID = document.getElementById("heading");
// console.log(elementID);

// // Access Elements by ClassName: This method returns a collection of HTML elements with the specified class name.

// const elementByClassName = document.getElementsByClassName("title");
// console.log(elementByClassName);

// // Access Elements by TagName: This method returns a collection of HTML elements with the specified tag name.

// const elementByTagName = document.getElementsByTagName("h1");
// console.log(elementByTagName);

// // QuerySelector: This method retrieves the first element that matches a specified CSS selector.

// // const elementByQuerySelector = document.querySelector("#heading");
// const elementByQuerySelector = document.querySelector(".title");
// console.log(elementByQuerySelector);

// // QuerySelectorAll : This method retrieves all elements that matches a specified CSS selector.

// // const elementByQuerySelector = document.querySelector("#heading");
// const elementByQuerySelectorAll = document.querySelectorAll(".title");
// console.log(elementByQuerySelectorAll);

// elementByQuerySelectorAll.forEach((item) => {
//   item.style.color = "orange";
// });

// console.log(document.querySelector('[data-custom="example"]'));

// const parentElement = elementID.parentNode;

// console.log(parentElement);

// const childElements = parentElement.children;

// console.log(childElements);

// const nextSibling = elementID.nextElementSibling;
// console.log(nextSibling);

// const prevSibling = elementID.previousElementSibling;
// console.log(prevSibling);

// const descendantElements = document.querySelectorAll("#container .content");
// console.log(descendantElements);

// ============================ className vs classList

// const btn = document.getElementById("btn");

// // btn.className = "active-btn";
// // btn.className += " active-btn";
// // btn.className += "abc-btn";
// // console.log({ btn });

// // classList -> It's an array representation of className

// btn.classList.add("abc", "active-btn", "hello");

// btn.classList.remove("active-btn");
// console.log(btn.classList.contains("active-btn"));
// console.log(btn.classList.contains("hello"));
// // toggle() -> to remove and add certain class means let's say you have an active class now if active class
// // exist then remove and if not then add that's it
// btn.classList.toggle("active");
// console.log(btn.classList);

// =========================== innerHTML, innerText, textContent

// innerText Property sets or returns the text content of the specified node and it's descendants. It represents
// the rendered text of an element excluding hidden text

// const exampleDiv = document.getElementById("example");
// console.log(exampleDiv.innerText);

// innerHTML Property sets or returns the HTML content(including tags) of an element. It represents the entire
// HTML structure of an element, including its children.

// console.log(exampleDiv.innerHTML);

// textContent Property sets or returns the text content of the specified node and its descendants. It represents
// text content of an element, including all text nodes and whitespace.

// console.log(exampleDiv.textContent);

// DIFF
/*
1. innerText: Renders text as it would appear visually, excluding hidden elements and their content
2. innerHTML: Renders content as HTML, including HTML tags and their associated styling and structure
3. textContent: Renders content as text, including all text nodes and whitespaces, but excluding HTML tags.
*/

// ===================== Style Property
const exampleDiv = document.getElementById("example");
console.log(exampleDiv.style.color);

exampleDiv.style.color = "blue";
