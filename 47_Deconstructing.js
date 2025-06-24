// Note:
// Destructuring is not destructive and does not change the original object.

// Object Default values
const person = {
    name: "john",
    lastname: "Deo",
    age: 30,
};

// Destructuring with default value
let { name, lastname, country = "US" } = person;

console.log(person); // { name: 'john', lastname: 'Deo', age: 30 }

// Object Property Alias
let { lastname: aliasForLastName } = person;
console.log(aliasForLastName); // "Deo"

// String Destructuring
let str = "W3schools";
let [a1, a2, a3, a4, a5, a6] = str;

console.log(str);      // "W3schools"
console.log(a1, a2);   // "W" "3"

// Note :
// Destructuring can be used with any iterables.

// Array Destructuring

const fruits = ["Bananas", "Oranges", "Apples", "Mangoes"];
// Desructing :
let [fruit1, fruit2] = fruits
console.log(fruits);
console.log(fruit1, fruit2);


// Skipping Array Values :
// We can skip array values using two or more commas .
const frut = ["Bananas", "Oranges", "Apples", "Mangoes"];

// Destructuring :
let [frut1,,,frut2] = frut;
console.log(frut);
console.log(frut1, frut2);

// Array Position values :

let{[0]:frui1 , [1]: frui2} = fruits ;

console.log(frui1, frui2);


// The Rest Property :

// You can end a destructuring syntax with a rest property.

const numbers = [10, 30, 45, 23,51, 6, 56];

// Destructing 
const [a, b, ...rest] = numbers;
console.log(a,b,...rest);
