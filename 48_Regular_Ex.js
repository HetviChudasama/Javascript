// Note :A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations

let text = "visit W3schools!";
let n = text.search("W3schools");
console.log(n); //output : 6

// using string search() with a regular expression

let a = text.search(/W3schools/i);
console.log(a); //6

// Using string replace() with a string :

let result = text.replace("W3schools", "Microsoft");

console.log(result);

// Using string replace with a regular expression :

console.log(text.replace(/Microsoft/i, "W3schools")); //output : visit W3schools!

// regular expression patterns :

const pattern = /e/;
console.log(pattern.test("the best things in life are free!"));
// true

// Using  exec():
// The exec() method executes a search for a match in a specified string.

const patterns = /best/;
console.log(patterns.exec("the best things in life are free!"));

let txt = "Ladies and gentlement";
let x = txt.match(/[abc]/gi);
console.log(x);
