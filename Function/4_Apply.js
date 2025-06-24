// Method Reuse :

// With the apply() method , you can write a method that can be used on different objects .

// The javscript apply() method :

const person = {
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};

const person1 = {
  firstname: "Rakesh",
  lastname: "Shukla",
};

const person2 = {
  firstname: " Soniya",
  lastname: "Gandhi",
};

console.log(person.fullname.apply(person1));
console.log(person.fullname.apply(person2));


// The difference between call() and apply()

// 1. The call() method takes arguments separately.

// 2. the apply() method takes argumetns as an array.

