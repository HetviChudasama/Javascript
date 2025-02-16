const name =  "Bob"

const repoCount = 50;
const repoName = "My Awesome Repository";
console.log(name + repoCount + repoName); //Do not use this type of syntax

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} and my reponame is ${repoName}`);

// Methods of the String :

const gamename = new String('John Deo');

console.log(gamename);  //it's throw array form string : john Deo

console.log(gamename[0]); //Output : J

console.log(gamename.__proto__); //output : {}

console.log(gamename.length); //output : 8

console.log(gamename.__proto__.length); //output : 0

console.log(gamename.toUpperCase()); //JOHN DEO

console.log(gamename.charAt(2)); //output : t

console.log(gamename.indexOf('o')); //output : 1
 
console.log(gamename.slice(2,7)); //Output: hn De

console.log(gamename.substring(0,6)); //John D

console.log(gamename.split(' ')); //Output : ['John', 'Deo']

console.log(gamename.trim()); //Using the White Space characters 

// console.log(gamename.tolowerCase());