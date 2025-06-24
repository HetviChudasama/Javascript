// Prototype Inheritance :
// Adding porperties and methods of Objects :

// Using prototype propety :

function person(first, last, age, color) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.color = color;
}
person.isPrototypeOf.nationality = "English";

person.isPrototypeOf.name = function () {
  return this.firstname + " " + this.lastname;
};

const mydaughter = new person("shally", "Deo", 15, "white");
console.log(mydaughter);
console.log(mydaughter.name);

// All JavaScript objects inherit properties and methods from a prototype.

// Portotype Inheritance :

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype

function clock( Company , Cost , Sellingprice , MadeOn) {
  this.Company = Company;
  this.Cost = Cost;
  this.Sellingprice = Sellingprice;
  this.MadeOn = MadeOn;
}

clock.prototype.profit = function() {
  return (this.Sellingprice - this.Cost);
}

const newclock = new clock("prada" , 4500 , 4960 , "China");
console.log(newclock.profit());
console.log(newclock);
