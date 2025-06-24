// Self-Invoking Functions :

( function() {
    let x = "Hello";
})();
// Output: undefined

function outer(a,b) {
    return a*b;   
}

let a = outer(4,3) * 2;
console.log(a);
// output : 24

// functions are objects :

function add(a,b){
    return arguments.length;
}
console.log(add(5,6,6));
//output : 3 : gives the argument of the parameters 

function multiply (A,B){
    return A*B;
}
let x = multiply(4,5);
console.log(x.toString());
// output : 20

function name(a,b ){
    return ((a + b) * a);
}

console.log(name("john", "Bob").toString());
// output : NaN

// Arrow Function :

var c = function(x,y){
    return x * y;
}

// ES6
const b = (x,y) => x * y;

// Function declaration 

function sum(A,b) {
    return A +b;
}
console.log(sum(9,5));

// Function expression :

// A javascript function can alsob ne defined using an expressions.

const y = function (a,b){
    return a*b
}

console.log(y(6,2));

const food = function (variaety , price) {
    return variaety + "-" + price 
}

console.log(food("Munchurian" , 700));

// Using the Function() Constructor :

const myfunction = new Function ("c" ,"b" , "return c * b");

let w = myfunction(6,8)
console.log(w);

// Function hoisting

multuplication(9) 

function multuplication (y) {
    return y*y;
}
console.log(multuplication(9));


// Self- Invoking Function: 

// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

(function () {
    let x = "Hello!"
})();

