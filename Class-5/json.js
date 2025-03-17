let person = {
  name: "Neeraj",
  age: 26,
  isStudent: false,
  address: {
    street: "Bangalore",
    city: "Bangalore",
    postalCode: "555555",
  },
  hobbies: ["travelling", "Bike Rides", "Gaming"],
  hasPets: null,
};

const personStringified = JSON.stringify(person);
console.log(personStringified);

// we need this stringify method to convert to string because to send data
// from client to server

// limitations of JSON.stringify()
// 1. circular references
const obj = {};
obj.circularRef = obj;
console.log(obj);

// try {
//   const personStringifiedCircular = JSON.stringify(obj);
//   console.log(personStringifiedCircular);
// } catch (error) {
//   console.log(error);
// }

// 2. Functions and Non-Serializable Values

// let person = {
//   name: "Neeraj",
//   age: 26,
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
//   undefinedValue: undefined,
// };

// const jsonStr = JSON.stringify(person);
// console.log(jsonStr);

// JSON.parse()
// It does the reverse of JSON.stringify() does
// converts strings to object

const parseJson = JSON.parse(personStringified);
console.log(parseJson);
