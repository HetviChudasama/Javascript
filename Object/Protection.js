// 1. Object Protection Methods :

const Doctors = {
  name: "Dr. Meera Patel",
  specialization: "Cardiologist",
  experience: 12, // in years
  hospital: "Apollo Hospital, Ahmedabad",
  isAvailable: true,
  consultationFee: 800, // in INR
};

Object.preventExtensions(Doctors);
Object.nationality = "Indian";
console.log(Doctors);

// The Object.preventExtensions() method prevents adding properties to an object.

// Create Array

const Fruits = ["banana", "Orange", "Apple", "Mango"];

Object.preventExtensions(Fruits);

// Fruits.push("Kiwi"); its throw error

// Fruits.pop(); doesnet work

console.log(Fruits);

// 2. Object.isEntensible()

let answer = Object.isExtensible(Doctors);
console.log(answer); //false

const zoo = {
  animals: "rabbit",
  no: 90,
};

console.log(Object.isExtensible(zoo));
console.log(zoo);

// 3. Object.seal()

// The Object.seal() method prevents additions or deletions of new properties.

// The Object.seal() method makes existing properties non-configurable.

// The Object.isSealed() method can be used to check if an object is sealed.

// javascript Object Protection

const car = {
  type: "Fiat",
  model: "500",
  color: " white",
};

// Prevents re-assignment
// Prevents adding Object Properties 
console.log(Object.preventExtensions(car));
car.driver = "rahul";
console.log(car);

console.log(Object.isExtensible(car)); //false

const rain = {
  wear: "raincode",
  israinny: true,
  eatingcorn: "Yummy",
};
// Prevetns adding and deleting object properties
console.log(Object.seal(rain));

rain.peoplemood = "Happpy";

console.log(rain);
console.log(Object.isSealed(rain)); //true
console.log(Object.isSealed(car)); //
// This will throw an error 
delete rain.eatingcorn;

const Citizen = {
  votingcard: "Requied",
  Addharcard: "Required",
  DrivingLicence: "Required",
  Home: "Not Compalsory",
  pancard: "Required",
};

// Prevents any changes to an Object 
console.log(Object.freeze(Citizen));
console.log(Object.isFrozen(Citizen));

