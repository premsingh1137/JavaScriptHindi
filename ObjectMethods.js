/*
  There are some object methods in JavaScript.
  - Object.keys(
  - Object.values()
  - Object.entries()
  - Object.assign()
  - Object.freeze()
  - Object.seal()
  - Object.isSealed()
  - Object.isFrozen()
  - Object.is()
*/

const { object } = require("webidl-conversions");

//  Object.keys() - Returns an array of a given object's own enumerable property names.
// const person = { name: 'John', age: 30 };
// const keys = Object.keys(person); // ['name', 'age']
// console.table(person)

// Object.values() - Returns an array of a given object's own enumerable property values.
// const person = { name: 'John', age: 30 };
// const values = Object.values(person); // ['John', 30]
// console.table(values)

// let car = {name: "Mahindra", model: "XUV700", year: 2020, color: "Red", brand: "Mahindra" };
// let carValue = Object.keys(car);
// console.table(carValue[1]);


//Object.entries() - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const person = { name: 'John', age: 30 };
const entries = Object.entries(person); // [['name', 'John'], ['age', 30]]
console.table(entries);