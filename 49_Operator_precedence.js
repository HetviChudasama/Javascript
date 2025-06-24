// Javascript operator precedence :

let x = 100 + 50 * 3;
console.log(x); //output : 250

let a = (100 + 50) * 3;
console.log(a); //450

console.log((100 / 50) * 3); // output : 6

// Optional Chaining '?.:

// Note :The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

let user = {};
// alert(user?.address ?. street );
// output : undefined (no error)

let user1 = null;
console.log(user1?.address?.street); //output : undefined (no error)

// Short-circuiting :

let user2 = null;
let b = 0;
function sayHi(b) {
  return b++;
}
console.log(user2?.sayHi(b++));
console.log(b); //0 , value not increameneed

let key = "firstname";

let person = {
  firstname: "john",
};

let person2 = null;

console.log(person?.[key]); //john
console.log(person2?.[key]); //undefined

let age = "Age";

let details = {
  name: "Bob",
  Age: 30,
};
let details2 = {
  Age: 40,
};

console.log(details?.[age]);
console.log(details2?.[age]);
console.log(delete details?.name); //true
console.log(details); // { Age: 30 }