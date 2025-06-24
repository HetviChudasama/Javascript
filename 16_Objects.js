// Create an Object :

// Methods - 01
const Person = {
  FirstName: " Bob",
  LastName: "Deo",
  Age: 30,
  eyeColour: "Blue",
  Salary: 30000,
  HaveDrivingLicence: "yes",
  HaveCar: "no",
  fullName: function () {
    return this.FirstName + " " + this.LastName;
  },
};

console.log(Person.FirstName);
console.log(Person["FirstName"]);
console.log(Person.funtion); // output  : undefined

//  Method - 02

const Car = {};

(Car.name = "Fiat"),
  (Car.year = 2010),
  (Car.color = "Red"),
  (Car.price = 10000);

console.log(Car);

// Methods - 03

const House = new Object();

(House.color = "white"), (House.year = 2015), (House.price = 50000);
console.log(House);
