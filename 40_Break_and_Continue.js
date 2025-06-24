// The break statement "jumps out" of a loop.

// The Containue statmenet "Jumps over" one iteation in the loop.

// The Break Statement
let text = "";
for(let i = 0; i< 10 ; i++){
    if(i === 3) {break ;}
    text += "The number is " + i;
}
console.log(text);
//  the loop prints the 0 to 2

// The Containue Stattement :

// the containue statement breaks one iteration (in the loop) , if a specified condition occurs, and containue with the next iteration in the loop.

// Example :

let text1 = "";
for(let i = 0; i <= 10 ; i ++){
    if(i === 3 ){continue;}
    text1 += "The number is " + i;
}

console.log(text1);

// 3. Javascript Labels : 

// Note : With a label reference, the break statement can be used to jump out of any code block:

const cars = ["BMW", "Volvo", "Saab", "Ford"];

list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}