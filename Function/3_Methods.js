// 1. Javascript Finction Call() :

// Method Reuse :

const person = {
  firsstname: "John",
  lastname: "Doe",
  fullName: function () {
    return this.firsstname + " " + this.lastname;
  },
};
console.log(person.fullName()); // John Doe

const info = {
  Fullname: function (city, country) {
    return this.fname + " " + this.lname + " " + city + " " + country;
  },
};

const person1 = {
  fname: "hello",
  lname: "world",
};

const person2 = {
  fname: "hello2",
  lname: "world2",
};

// this will return  hello world :

console.log(info.Fullname.call(person1, "New York", "USA")); // hello world New York USA
console.log(info.Fullname.call(person2 , "Kashmir" , "kerla"));

// Call method with the Arguments :


// 2. Javascript Function Apply() :
// console.log(person2.fullName.apply(person1));

// The Differene Between Call() and apply() :

// the call() method takes arguments seperately.

// the apply() method takes argumnets as an array.

// console.log(person2.fullName.apply(person1, ["New York", "USA"])); 
// hello

