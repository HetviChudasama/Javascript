// 1. Primitive data type 

// 7 types : String , Number , Boolean, null, undefined , 
// symbol : makes the value unique
// bigInt 

// Note : Javascript is dynamically type language 

const score = 100;
console.log(score);

const scoreValue = 100.3;
console.log(scoreValue);

const IsloggedIn = false;
console.log(IsloggedIn);

const OutSidetemp = null;
console.log(OutSidetemp);

let userEmail;
console.log(userEmail);

const id = Symbol('123');
console.log(id);

const anotherID = Symbol('123');
console.log(anotherID);

console.log(id === anotherID);  //output : false

const bigNumber = 233465791827473n;
console.log(typeof(bigNumber));  // output : bigInt

// 2. Reference type : Non- Primitive :

// Array, Objects, Functions 

const Fruits = ["Apple" , "Banana" , "Cherry" , "Pineapple" ];
console.log(Fruits);
console.log(Fruits[2]); // output : cherry

const employees = {
    age: 23,
    salary : 3000,
    position : "parttimeworker",
    name : "SureshBhai"
}

console.log(employees);


const muyfunction = function(){
    console.log("hello world");
}

console.log(muyfunction);