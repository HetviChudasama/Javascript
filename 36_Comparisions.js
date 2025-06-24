// Javascript Comparisions :
x = 5;
console.log(x == 8); // false
console.log(x == 5); //true
console.log(x == "5"); //true
console.log(x === 5); // true
console.log(x === "5"); // false
console.log(x != 8); // true
console.log(x !== 5); // false
console.log(x !== "5"); // true
console.log(x !== 8); //true
console.log(x > 8); // false
console.log(x < 8); //true
console.log(x <= 8); //true

// How can it be Used :
age = 19;
if (age < 18) {
  console.log("Too young to buy alcohol");
} else {
  console.log("He can buy the alcohol");
}

// Program that if the students have the 23 + maraks so they are pass in the exam:

let marks = 67;
if (marks > 23) {
  console.log("Congratulation!", "You are pass");
} else {
  console.log("Sorry", "you are fail");
}
// Logical Operators :
let ag = 34;
let voteable = ag > 18 ? "Too Young " : "Old enough";
console.log(voteable);

// Comparing the different types:

console.log(2 < 12); //true
console.log(2 < "12"); // true
console.log(2 < "John"); //false
console.log(2 > "John"); // false
console.log(2 == "John"); // false
console.log("2" < "12"); // false
console.log("2" > "12"); // true
console.log("2" == "12"); // false

// comparing two stirng "2" :

// agee = Number(agee);
// if(isNaN(agee)){
//     voteablee = "Input is not a number";
// }
// else{
//     voteablee = (agee < 18) ? "Too young " : " Old enogth"
// }

// The Nullish Coalescing Operator (??):

let name = "null";
let text = "missing";
let result = name ?? text;
console.log(result);
//output : null
