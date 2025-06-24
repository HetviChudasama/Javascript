// objectName.property
// let age = person.age;

// let name = person["name"];

// let lastname = person[x];

// person.nmae + is + person.age + "years old";

// Deleting the Porperties :

const card = {
  name: "Invitation Card",
  for: " Rahul Sharma",
  From: " Moulesh Pandya",
  invitationDate: "15th August",
  invitationTime: " 10:00 AM",
  invitationAddress: " 123, ABC Street, Delhi",
  invitationMessage:
    "You are cordially invited to the wedding of Rahul Sharma and Priya Sharma",
};

delete card.invitationDate;
delete card.invitationTime;

// Nested Objects  :

const myObj = {
  name: "John",
  age: 60,
  myCards: {
    card1: "Invitation Card",
    card2: "Birthday Card",
    card3: "Wedding Card",
  },
};

console.log(myObj.myCards.card1);
console.log(myObj.myCards.card2);

let p1 = "myCards";
let p2 = "car2";

// myObject[p1][p2];

// javascript Display Objects :
 
// Create the Object :
// Displaying a JavaScript object will output [object Object].

const Person1 = {
    name  : "John ",
    age : 30,
    city :"New York "
};

document.getElementById("demo").innerHTML = Person1;

// the Porperties of an Object can be displayed as a String .

// Create an Object :
const Person2 = {
    name : "Carteain",
    age :  40,
    city : " Austreliya"

};
//  Display Properties :
document.getElementById("demo").innerHTML = Person2.name + " " + Person2.age + " " + Person2.city;

// 

// Hello
// How are you 