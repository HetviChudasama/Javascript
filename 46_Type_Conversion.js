// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// Converting Numbers to Booleans

// javascript variable can be converted to a new variable and anothe data types:

// 1. Converting stirng to Number :

console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number(" "));
console.log(Number(""));
console.log(Number(" 99 88"));
console.log(Number("John"));

// Number Methods :
// Note :Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer
// The Unary + Operator

let y = "5";
let x = +y;
console.log(x); // 5
let z = "john";
let a = +z;
console.log(a); //NaN
console.log(typeof a); //number

// Converting Numbers to Stirngs:

console.log(String(x));
console.log(String(123));
console.log(String(100 + 23));
console.log((123).toString());
console.log((123 + 100).toString());
console.log((934785).toExponential());
console.log((9.4532).toFixed());
console.log((81734).toPrecision());

// Converting Dates to Numbers ;
let d = new Date();
console.log(d);

let n = Number(d);
console.log(n);

let b = new Date();
let c = b.getTime();
console.log(Number(c));

// Converting Dates to Strings :

console.log(String(Date()));
console.log(Date().toString());

// Converting BooLeasn to Numbers :
console.log(Number(false)); //0
console.log(Number(true)); //1

// Convertubg BooeLeans to stirng :

console.log(String(false));
console.log(String(true));

// Automatic type COnversion :

// Note : When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

console.log(5 + null);
console.log(typeof (5 + null));
console.log(typeof ("5" + null));
console.log(typeof ("5" + 2));
console.log(typeof ("5" - 2));
console.log(typeof ("5" * "2"));
console.log("5" * "2");

console.log();
