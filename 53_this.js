// What is this?

// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

const person = {
  name: "john",
  lastname: "Deo",
  age: 25,
  id: 5566,
  fullname: function () {
    return this.name + "" + this.lastname;
  },
};
console.log(person);

// this in a method :
console.log(person.fullname()); // "johnDeo";

'usestrict';
let x = this;
console.log(x); // {}

// this in a function (default)