/*
  There are some array methods in JavaScript.
  - push()
  - pop()
  - shift()
  - unshift()
  - slice()
  - splice()
  - map()
  - filter()
  - reduce()
*/

// push() - Adds one or more elements to the end of an array and returns the new length of the array
//const fruits = ['apple', 'banana'];
//fruits.push('orange'); // ['apple', 'banana', 'orange']
// console.table(fruits);

// pop() - Removes the last element from an array and returns that element.
// const fruits = ['apple', 'banana', 'orange'];
// const last = fruits.pop(); // 'orange'
// console.table(fruits);

//shift() - Removes the first element from an array and returns that removed element.
// const fruits = ['apple', 'banana', 'orange'];
// const first = fruits.shift(); // 'apple'
//console.table(fruits); 

//unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// const fruits = [ 'banana', 'orange'];
// fruits.unshift('apple'); // 'apple'
// console.table(fruits); 

// slice() - Returns a shallow copy of a portion of an array into a new array object.
// const fruits = ['apple', 'banana', 'orange', 'mango'];
// const citrus = fruits.slice(1, 3); // ['banana', 'orange']
//  console.table(citrus); 

 let myName = ['Prem', 'Rahul', 'Suraj', 'Girish', 'Arun', 'Banyan', 'Crown'];
myName.splice(2, 3 , 'Avani');
console.table(myName);

// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// const fruits = ['apple', 'banana', 'mango'];
// fruits.splice(2, 0, 'orange'); // Inserts 'orange' at index 2
//  console.table(fruits); 


// map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
// const numbers = [1, 4, 9];
// const roots = numbers.map(Math.sqrt); // [1, 2, 3]
// console.table(roots);


//filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(number => number % 2 === 0); // [2, 4]
// console.table(evens);


//reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
// const numbers = [10, 2, 30, 4];
// const sum = numbers.reduce((prem, currentValue) => prem + currentValue, 0); // 10
// console.table(sum);
