// functions are the short form of the expanded code.

function SaymyName (){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");

    
}SaymyName();

function Hellowrold(a,b){
    return (a  + b)
}
console.log( "the sum of the two number is :", Hellowrold(2,34));

function AreaOfCircle(pi, r){
    return ( pi * r * r);
}

console.log( "The area of the circle :", AreaOfCircle(3.14,5,5));


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("hetvi");
console.log(loginUserMessage())
// console.log(loginUserMessage("hetvi"));

function loginUserMessageNew(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMessageNew("hetvi");
console.log(loginUserMessageNew());

// Functions with Objects and Arrays :
// Shopping card :

function calculateCardPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCardPrice(200));
console.log(calculateCardPrice(200,400,500,302300));

const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username:"sam",
    price :399
})

// Arrays passed in the Function 
const MyNewArray = [200,400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(MyNewArray));

// Local Scope and Global Scope:

// lec-22 scope level and mini hoisting in Javascript 

// let,var,const 

let a = 10;
const b = 20;
var c = 30;

if (true){
    let a = 30;
    const b = 20
    var c = 24
}

console.log(a);
console.log(b);
console.log(c);

// Scope level and mini hoisting in javascript.

// Nested Scope 

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);
    
    // two()

    const username2 = "hitesh"
    if(username2 === "hitesh"){
        console.log("username is hitesh");
    } 

    // console.log(website)
}
one()

// ===================================

