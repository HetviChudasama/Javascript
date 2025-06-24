// An array is a special variable , which can hold more one value:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);

// Changing an Array Element
cars[1] = "Opel";
console.log(cars);

const Cars = [];
(Cars[0] = "Rols Roys"), (Cars[1] = "Alto"), (Cars[2] = "K10");

// Using the js keyword new

const collections = new Array("car1", "car2", "car3");

// COnveting an Array to a String

const Fruits = ["Bananna", "Oranges", "Apple", "Mango"];
console.log(Fruits.toString());

// Access the Full Array:
console.log(Fruits);
console.log(Fruits.length);
console.log(Fruits.sort());
// Accessing the first Array Element :
console.log(Fruits[0]);
// Accessing the last Array Element
console.log(Fruits[Fruits.length - 1]);

// Arrays are Objects
// Note :Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays

const person = ["John", "Deo", 46];

// Object:
const Person = { firstName: "John", lastName: "Doe", age: 46 };

// Array Elements Can be Objetcs

// const myArray[];
// myArray[0] = Date.now;
// myArray[1] = myfunction;
// myArray[2] = Cars;

// Array properties and Methods :

console.log(cars.length);
console.log(cars.sort());

// Looping Array Elemements:
let FLen = Fruits.length;

let text = "<ul>";
for (let i = 0; i < FLen; i++) {
  text += "<li>" + Fruits[i] + "</li>";
}
text += "</ul>";

// using the forEach() Loop:

let text2 = "<ul>";
Fruits.forEach(myfunction);
text2 += "</ul>";

function myfunction(value) {
  text2 += "<li>" + value + "</li>";
}
// Adding Array Elemenets :
console.log(Fruits.push("Lemon")); //Adds a new element (Lemon) to fruits

// New element can also be added to an array using th length property :

console.log((Fruits[Fruits.length] = "Grapes"));

const vegies = ["cabbage", "tomato", "onion", "patato"];
let type1 = Array.isArray(vegies);
console.log(type1); // output : true

let add = vegies.push("ladyfinger");
console.log(vegies);

// console.log((vegies.push("ladyfinger")));

// Associative Arrays :
// note : Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.

// Example :
const Pr = [];
Pr[0] = "John";
Pr[1] = "Deo";
Pr[2] = 46;
Pr[3] = "NewYork";
console.log(Pr.length);
console.log(Pr[2]);
console.log(Pr);

// Note : JavaScript does not support associative arrays.
// Note:You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

const points = new Array(40, 80, 23, 56, 23, 12, 67, 89);
const Points = [40, 80, 24, 67, 80, 65, 70];
console.log(typeof Points);

// Create an array with three elements :
const point = new Array(40, 100, 1);

// finding the typeof array :

let type = typeof points;
console.log(type); // Object
console.log(typeof Pr);

const students = ["Rahul", "Amit", "Maulesh", "Dhaval"];
console.log(students instanceof Array); // output : true

// Nested Arrays and Objects :

const myObj = {
  name: "john",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
let z = "";
let y = "";

for (let i in myObj.cars){
    z += myObj.cars[i].name;
    for(let j in myObj.cars[i].models){
        y += myObj.cars[i].models[j];
    }
}
console.log(z);
console.log(y);

