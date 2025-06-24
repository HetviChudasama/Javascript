// The typeof Operator
// The typeof operator returns the data type of a JavaScript variable.

console.log(typeof "john");
console.log(typeof ("john" + "Deo"));
console.log(typeof 3.14);
console.log(typeof 33);
console.log(typeof (33 + 65));
console.log(typeof true);
console.log(typeof false);
console.log(typeof 123n);
console.log(typeof Symbol());
console.log(typeof x);
console.log(typeof null); // output : object
// Note : In JavaScript, null is a primitive value. However, typeof returns "object".

// Note :The typeof operator returns only two types:

// object
// function

console.log(typeof { name: "john" }); //object
console.log(typeof [1, 2, 3, 4]); //object
console.log(typeof new Map()); //object
console.log(typeof new Set()); //object
console.log(typeof function () {}); //object

// How to recognized an array :
const fruits = ["apples", "bananan", "oranges"];
console.log(Array.isArray(fruits)); //true

// The instance of Operator :
const time = new Date();
console.log(time);

console.log(time instanceof Date); //true

// Create a Map :
const person = new Map([
  ["john", 30],
  ["sofia", 23],
  ["Bob", 32],
]);
console.log(person);
console.log(person.get("john"));
console.log(person.set("barbie", 50));
console.log(person.keys());
console.log(person.values());
console.log(person.entries());
console.log(person instanceof Map);

// Create a Set :

const dryfruits = new Set(["almond", "pista", "casue"]);
console.log(dryfruits instanceof Set);

// Undefined type :
let car;
console.log(typeof car); //undefined

// Empty Values :

// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.

// Example 2 :
let cars = "";
console.log(typeof cars); //string

// NULL :

// Create an Object :

let persons  = {firstname : " John", lastname : "Deo", age : 30 , eyecolour : "blue"};
persons = null
console.log(typeof persons); //object 
console.log(persons); //value : null


// The constructor Property :

// Note  : The constructor property returns the constructor function for all JavaScript variables.

// console.log({name: "john", age : 34}.constructor);

// Note:

// The typeof operator returns object for all types of objects:

// objects
// arrays
// sets
// maps
// You cannot use typeof to determine if a JavaScript object is an array or a date.

// How to recognized an Array.

const fruis = ["apples", "bananas", "oranges"];
console.log(Array.isArray(fruis)); //true 