// Loops are handy, if you want to run the same code over and over again , each time with a different value.

// Loops :
// 1. for 
// 2. for/in -- loops through the properties of an object.
// 3. for/of -- loops throught the values of an iterable object.
// 4. while -- loops throught a bloack of code while a specified condition is true.
// 5. do/while -- also through a block of code while a specified condition is true.

let Text = "";
for(let i = 0; i < 5; i ++){
    Text += "The Number is " + i + "<br>";
}

// How to use Expression 1 :
cars = ["susuki", "Aulto" , "BMW" , "RolsRoys" , "Van"];
let i = 2;
let len = cars.length;
let text = "";
for ( ; i < len ; i++){
    text += cars[i] + ",";
}
console.log(text);


// 2. For In Loops :

// The javascript for in statemenet loops throught the properties of an Object :

for(key in object){
    // Code block to be executed.
}

// Example :

const person = {fname : "John" , lname : "Deo" , age : 25};

let text2  = "";
for(let x in person){
    text2 += person[x];
}
console.log(text2);

// Example Explained  :
//  for in loop iterates over a person object.
// Each iteration returns a key(x)


// ForIn Over Array : 
for(variable in array){
    // code 
}

const numbers = [45, 78, 23, 45, 89, 23];
let num = "";
for(let i in numbers ){
    num += numbers[i]
}

// Array.forEach() : 
// Method calls a function (a callback function) once for each array element.

const number = [45, 6, 7, 89, 25 ];

let txt = "";
number.forEach(myfuction)

function myfuction(value, index, array){
    txt +=value;
}

console.log(txt);

// Javascript For of loop :

// 3. for of loop :

// Variable : for every iteration the value of the next property is assigned to the variable. Variable can be declared with const , let or var.

// Looping over an array :

const cars = ["BMW" , "Volvo", "Mini"];

let txt2 = "";
for(let x of cars){
    txt2 += x;
}
console.log(txt2);

// Looping over a string 

let language = "Javascript";

let string = "";
for(let x of language){
    string += x;
}