// Javascript Number Methods :

// 1. the tostring() Method :

let x = 123;
let A = x.toString();
let y = (123).toString();
let z = (100 + 23).toString();
console.log(A);

// 2. the toExponential() Method :

// Note : toExponential() returns a string, with a number rounded and written using exponential notation.

let B = 9.656;
let C = B.toExponential(2);
console.log(C); //output : 9.66e + 0
console.log(B.toExponential(4));
console.log(B.toExponential(6));

// 3. The toFixed() Method :

// Note : toFixed() returns a string, with the number written with a specified number of decimals:

let D = 9.66667;
console.log(D.toFixed(0));
console.log(D.toFixed(2));
console.log(D.toFixed(4));
console.log(D.toFixed(6));
console.log(D.toFixed(8));

// 4. the toPrecision() Method:

// Note:toPrecision() returns a string, with a number written with a specified length:

let E = 8.92354;
console.log(E.toPrecision());
console.log(E.toPrecision(2));
console.log(E.toPrecision(3));
console.log(E.toPrecision(4));
console.log(E.toPrecision(5));

// 5. The valueOf() Method :
// Note: The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

let X = 123;
console.log(X.valueOf(4));
console.log((234).valueOf());
console.log((234 + 89).valueOf());

// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert a variable to a number:

// 6. The Number() Method
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");

console.log(Number(new Date("1970-01-01"))); //output : 0
console.log(Number(new Date("1970-01-02"))); //output : 86400000

// The parseInt() Method:
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10  20  30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));



