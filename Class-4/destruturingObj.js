// const person = {
//   name: "Neeraj",
//   age: 26,
//   city: "Bangalore",
// };

// const { name, city, age } = person;
// console.log(name, age, city);

// const { name: personName, city, age: personAge } = person;
// console.log(personName, personAge, city);

// const { name1 = "Anonymous", city, age } = person;
// console.log(name1, age, city);

// ====================== Nested Destructuring

const person = {
  name: "Neeraj",
  age: 26,
  address: {
    city: "Bengaluru",
    country: "IN",
  },
};

// const {
//   name,
//   address: { city, country },
// } = person;

const { name, ...rest } = person;

console.log(name, rest);
