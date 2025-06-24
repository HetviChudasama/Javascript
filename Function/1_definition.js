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