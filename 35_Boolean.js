// The Boolean() Function :
console.log(Boolean(10 > 9)); //true 

// Coparisons and Conditions  :
// Note : Everything with a "Value" is true 

let a = 100
console.log(Boolean(a)); //true
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean("false"));
console.log(Boolean(7 + 1 + 3.14));
console.log(Boolean(" "));

// Everything without a "value" is False :

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(10 / "Hello"));