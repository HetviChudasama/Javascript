// A javaascript set is a collection of unique values.

// each value can only occur once in a set.

// The values can be of any type, primitive values or objects.

// How to Create a Set
// You can create a JavaScript Set by:

//  --- > Passing an array to new Set()
//--->  Create an empty set and use add() to add values

const letters = new Set(["A", "B", "C"]);

console.log(letters.add("a","b","c" ));

// Example 1 :
const set = new Set();
const a = "java";
const b = "Javascript";
const c = "OOps";

// Add variables to the set :
console.log(set.add(a));
console.log(set.add(b));
console.log(set.add(c));
console.log(set.add(a, b, c));

// Output :
// Set(1) { 'java' }
// Set(2) { 'java', 'Javascript' }
// Set(3) { 'java', 'Javascript', 'OOps' }
// Set(3) { 'java', 'Javascript', 'OOps' }

// Lsiting of the Elements :

const newletter = new Set(["ab" , "bc", "cd"]);

// List all the elements :

let txt = "";

for(const x of newletter){
    txt += x;
}
console.log(txt); // output :abbccd
console.log(typeof(newletter)); // type of : object 
console.log(letters instanceof Set);  // true 


// List all the elements :
let text = "";
for(const y in newletter){
    text += newletter[y];
}
console.log("the text is :" ,text);
