// Math.random() : returns a random number between 0 (inclusive), and 1 (exclusive) :

console.log(Math.random());

// Returns a random integer from o to 9 :

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 11));

console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 100) + 1);

// A proper Random Function :
// Example : 01 

function getInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getInteger(7, 90));

// Example : 02

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
