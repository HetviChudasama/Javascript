// Iterables are iterable objects (like arrays).

// Iterables can be accessed with simple and efficienet node.

// Iterables can be iterated over with for..of loops.

// The for of loops:
// for(variables of iterable){
// code block to be executed
// }

// Iterating Over a stirng

const name = " W3schhols";
for (const x of name) {
  // code block to be executed
}

// Iterating over an array:

const letters = ["a", "b", "c"];
let string = "";
for (const x of letters) {
  // code block of be executed
  string += x;
}
console.log(string);

// Iterating over an array :

const numbers = [2, 4, 6, 8];
let num = "";
for (const y of numbers) {
  num += y;
}
console.log(num);

// Iterating Over a set:
let news = "";

const letterrs = new Set(["a", "b", "c"]);
for (const a of letterrs) {
  news += a;
}
console.log(news);

// Iterating Over a Map:

let fruit = "";
const fruits = new Map([
  ["apple", 500],
  ["Bananans", 300],
  ["Oranges", 200],
]);

for (const z of fruits) {
  fruit += z;
}
console.log(fruit);

// Note : The iterator protocol defines how to produce a sequence of values from an object.

// Technically, iterables must implement the Symbol.iterator method.

// String, Array, TypedArray, Map and Set are all iterables, because their prototype objects have a Symbol.iterator method.

// Home Made Iterable :

// next():

function myNumber() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

// Create Iterable :
const n = myNumber();
n.next();
n.next();
n.next();
