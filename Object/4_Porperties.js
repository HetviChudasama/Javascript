// Object Properties :

// Adding a new peroperty to an Object.
// Changing Peroperty values
// Changing property metadata.
// changing Object getters and setters.

// 1. Adding a new property to an Object.

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
};


// Add a new property
let year = Object.defineProperty(person, "year", { value: "2004", writable: true });
console.log(person.year);
console.log(person);

// 2. Changing a property value :
