// Object.keys() method -> it returns an array of the object's enumerable properties.

let obj = {
  for: 1,
  let: 2,
  return: 3,
  u: undefined,
};

const keys = Object.keys(obj);
console.log(keys);

// Object.entries() method - returns both keys and values in form of arrays

const entries = Object.entries(obj);
console.log(entries);

// Object.values() method - returns values of keys

const values = Object.values(obj);
console.log(values);
