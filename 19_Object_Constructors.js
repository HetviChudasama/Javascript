// Objetc COntructors Functions :
// Sometimes we meed to create many Objects of the same typeof. to create an object type wen use Object constructor function .

// It is considerd good practice to name constructors function with an upper-case first lateer.

// Object Type Person

function Person(first, last, name, eye) {
  this.firstname = first;
  this.lastname = last;
  this.name = name;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", "John Doe", "Blue");

// Display Age :
document.getElementById("demo").innerHTML =
  "My Father is " + myFather.age + ".";

// Porperty Default Values :

function Mango(color, size, price, quantity = 1) {
  this.color = color;
  this.size = "small";
  this.price = 60;
  this.quantity = quantity;
}

const mango = new Mango("Orange", "big", 70);

// Adding a Property to an Object

// Adding a Property to a created object is easy :

// Mango.nationaity = "English";

// To add a new propety , you must add it to the constructor fucntion prototype :

Person.prototype.nationality = "Indian";

// Built - in javascript Constructors:

// Javascript has built-in constructors for all native objects :

new Object(); // A new Object object
new Array(); // A new Array object
new Map(); // A new Map object
new Set(); // A new Set object
new Date(); // A new Date object
new RegExp(); // A new RegExp object
new Function(); // A new Function object

// Did you Know ?

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().

// Examples

(""); //primitive stirng
0; //primitive number
false; //primitive boolean
{
} // object object
[]; // array object
// /()/ ;  // regexp object
// function(){}; // function object
