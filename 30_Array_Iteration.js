// 1. Javascript Array ForEach()
// Note: The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value ;
}
console.log(numbers);

// 2. Javscript Array Map()

// Note :The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

console.log(numbers2);

// 3. Javascript Array Flatmap():

const myArr = [1,2 ,3, 4, 45, 6];
const newArr = myArr.flatMap((x) => x * 4);
console.log(newArr);


// 4. Array Filter :
// Note : The filter() method creates a new array with array elements that pass a test.

const num = [ 56, 78, 12, 34, 56, 79, 80, 8];
const check = num.filter(functioncheck);
function functioncheck(value, index, array){
    return value > 18;
}
console.log(check);

// 5. Array reduce()

// Note : The reduce() method runs a function on each array element to produce (reduce it to) a single value.

const numbes = [45, 4, 9, 16, 25];
let sum = numbes.reduce(reducefunction);

function reducefunction(total, value, index, array){
    return total + value ;
}
console.log(sum);


// 6. Javascript Array every():

const rates = [ 56, 78, 9, 234 , 4567,90, 23 ];
let allover18 = rates.every(ratefunc);

function ratefunc (value, index, array){
    return value > 18;
}

console.log(allover18); //output : false

// 7. Javascript Array some():
const scores = [45, 4, 9, 16, 25];
let someOver18 = scores.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18); // output : true 


// 8. Array.from()

// Creating an Array from a string :

console.log(Array.from("AVzjsdbsdd"));

// output : [   'A', 'V', 'z', 'j','s', 'd', 'b', 's','d', 'd']

// 9. javascript Array Keys()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
let text = "";
for (let x of keys) {
  text += x ;
}
console.log(keys);

// 10. Javscript Array entries():

// Note : Create an Array Iterator, and then iterate over the key/value pairs:

const f = fruits.entries();
console.log(f);

// 11. javscript Array with()
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

// 12. javascript Arrray Spread(...)

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

console.log(...q1, ...q2, ...q3, ...q4);

