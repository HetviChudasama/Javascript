// Methods for Defining JavaScript Objects
// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()

const person = new Object();

// Add properties
person.name = "John";
person.age = 30;
person.salary = 30000;
person.id = 5534;
person.eyecolor = "blue";
person.licence = "yes";
person.address = "Cicago, USA";

console.log(person);

// Object type car
// Property Default Values :

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}
console.log(Person);

// Now we can use new Person() to create many new Person objects:

const myfather = new Person("John", "Deo", 50, "Blue");
const myMother = new Person("sally", "Rally" , 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("johnny","Rallly", 22, "green");
console.log(myfather, myMother, mySister, mySelf);


// 1. Javscript Object Literals :

const car = {};
car.name = "Susuki";
car.model = 2018;
car.weight  =  "90kg";
car.sit = 5;
car.fuel = "petrol and CNG"

console.log(car);

// 2. Javascript Object using  New Object()
const student = new Object();
student.name = "Sahil";
student.std = "7th";
student.rollno = 6;
student.surname = "Patel";
student.city = "Palanpur";
console.log(student);

// 3. Object Constructor Functions 

// Somethimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper case first letter.

// Object Type 

class Fruit {
  constructor(name, price, weight, color) {
    this.name = name;
    this.price = price;
    this.weight = weight;
    this.color = color;
    // Property Default Value :
    this.rate = "Fixed";
  }
}

const Apple = new Fruit("Orange" , 80 , "2kg" , "Orange");
console.log(Apple);
const Banana = new Fruit("banana" , 90 , "2kg" , "yellow");
console.log(Banana);

// Porperty Default Values :
// A value given a  property will be a default value for all objects created by the constructor :

