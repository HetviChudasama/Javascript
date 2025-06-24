const balance = 1000;

if (balance > 500) console.log("test");

// nestig in the condition

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 9000) {
  console.log("good");
} else {
  console.log("greaat balance");
}

const userloggedin = true;
const debitcart = true;
const loggedinfromGoogle = false;
const loggedInFromEmail = true;
if (userloggedin && debitcart) {
  console.log("welcome");
}

if (loggedInFromEmail || loggedinfromGoogle) {
  console.log("User logged in");
}

// Switch statement :

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  default:
    console.log("didnt match");
    break;
}

// compariosion

const userEmail = "hetesh@gmail.com"
if(userEmail){
  console.log("Got user Email")
}
else{
  console.log("Dont have user email")
}

// falsy value

false, 0, -0, 0n, null, undefined, "", NaN, [], {}, ``,BigInt, ""

// Others are the truly value
"0", 'false', " ", [ ], { }, function(){}

// Nulleish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);

