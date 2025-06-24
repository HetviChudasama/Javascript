// How to  Work with the memory:

// stack and heap memory 

// stack (primitive )
// Heap (non - primitive )

let myYoutubeChannel = "HetviChudasama";
console.log(myYoutubeChannel);

let anothername = "Chai aur code";
console.log(anothername);

let myAge = 20;

let anotherchannel = myYoutubeChannel
console.log(anotherchannel);  // output: HetviChudasama

let userOne = {
    name: "Hetvi",
    age: 20,
    occupation: "Software Engineer",
    hobbies: ["Coding", "Reading", "Writing"],
    
    userTow : {
        brothername : "Dhyey",
        brotherage : 18,
        brotherhobbies : ["Coding", "Playing", "Eating"],
        },
    }

console.log(userOne.name);
console.log(userOne.age);
console.log(userOne);
console.log(userOne.userTow);