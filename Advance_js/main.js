// 1. Scope :
// Block scope - variables declared insiade a pair of curly braces cannot be accesed from ouside the block.

const { Suspense } = require("react");

// function scope - variables declared inside a function cannot be accessed from outside the function.

// global scope - variables declared outside any function or block are accessible from anywhere in the program.

let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

// 2. Clouser :

// A clouser is the combination of a function bundle together with references to its surrounding state. Clousers are created every time a function is created , at function creation time.

function out() {
  let counter = 0;
  function inn() {
    counter++;
    console.log(counter);
  }
  return inn;
}
const fn = out();
fn(); //output : 01
fn(); //output : 02
//output : 1

// 3. Function Curring :

// curring is a process in functional prgoramming in which we transfrom a function with multiple argumnets into a sequence of nesting functions that take one arguments at a time.

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 5));

// sum(2,3,5) , sum(2)(3)(5)

function curry(fc) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fc(a, b, c);
      };
    };
  };
}

const curreidSum = curry(sum);
console.log(curreidSum(2)(3)(5));

const add2 = curreidSum(2);
const add3 = add2(3);
const add4 = add3(4);
console.log(add4); //output : 9

// 4. this keyword :

// the javascript this keyword is a reference to the current object. It is used to access the properties and methods of

// It makes functions reusable bu letting you decide the object value this value is determined entirely by how a function is called.

function sayMyName(name) {
  console.log(`my name is ${name}`);
}

sayMyName("Walter White");
sayMyName("Hisenburge");

// expliicite function 

const person = {
  name: "whiswas",
  sayMyName: function () {
    console.log(`my name is ${this.name}`);
  },
};
person.sayMyName();

sayMyName.call(person); //undefined 

// 

function Person (name){
    // this = {}
    this.name = name;
}
const p1 = new Person("vishvas");
const p2 = new Person("Batman");
console.log(p1.name, p2.name);

sayMyName()