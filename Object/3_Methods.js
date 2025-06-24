// javscript Object Methods :

// Object.assign(target , source)
// object.create(object)
// Object.entries(object);
// Object.fromEntries().\;
// Object.keys(Object)
// Object.values(Object)
// Object.groupby(object , callback)

const person1 = {
  firstname: "john",
  lastname: "Doe",
  age: 0,
  eyecolor: "blue",
};

// Create source Onject

const person2 = { firstname: "Anne", lastname: "Smith" };

// 1. Assign Source To target

console.log(Object.assign(person1, person2));

// Assign method :

const House1 = {
  Title: "pitrykrupa",
  Home_No: 301,
  Name: "Dr.Ajay kumar",
};

const House2 = {
  Title: "Shree krishna",
  Home_No: 306,
};

console.log(Object.assign(House1, House2));

const clock1 = {
  Company: "Rolex",
  Cost: 12000,
  Sellingprice: 15000,
  MadeOn: "Switzerland",
};

const clock2 = {
  Company: "Titan",
  Cost: 3000,
  //   Sellingprice: 4200,
  MadeOn: "India",
};

console.log(Object.assign(clock2, clock1));

// 2. Object.entries()

const Acfeature = {
  Brand: "LG",
  Capacity: "1.5 Ton",
  Type: "Split AC",
  EnergyRating: "5 Star",
  Inverter: true,
  CoolingTechnology: "Dual Inverter",
  NoiseLevel: "31 dB",
  PowerConsumption: "1430 Watts",
  WifiEnabled: true,
  AirFilter: "HD Filter with Anti-Virus Protection",
  Modes: ["Cool", "Dry", "Fan", "Auto", "Sleep"],
  RemoteControl: true,
  Price: 38990,
  MadeIn: "India",
};

console.log(Object.entries(Acfeature));

const fruits = {
  banana: 300,
  Oranges: 600,
  Apple: 500,
};

console.log(Object.entries(fruits));
// it returns the key and values of the object in the array

// 3. Object.fromEntries()

const fruitss = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

const myObj = Object.fromEntries(fruitss);
console.log(myObj);

// 4. Object.values()

const student = {
  name: "Hetvi Chudasama",
  age: 22,
  rollNo: 101,
  branch: "Computer Engineering",
  college: "GEC Modasa",
  skills: ["JavaScript", "React", "Node.js", "SQL"],
  isPlaced: true,
  cgpa: 8.7,
  address: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
  },
};

// Conditional Chaining

console.log(student?.skills);

console.log(Object.values(student));

console.log("Name of the first skills is  :", student.skills[1]);
console.log(student.address.city);

// 5. Object.groupBy()

const vegitables = [
  { name: "Tomato", Quantity: 600 },
  { name: "Patota", Quantity: 500 },
  {
    name: "Onion",
    Quantity: 200,
  },
  {
    name: "Kiwi",
    Quantity: 150,
  },
];

// Callback function to group Elemetns :

function mycallback({ Quantity }) {
  return Quantity > 200 ? "Ok" : "Low";
}

// Group by Quantity

const reuslt = Object.groupBy(vegitables, mycallback);
console.log(reuslt);


// 6. Object.keys()

const Animals = {
    name : "Lion",
    heigh : "2 inch",
    food : "row meal",
    lived : "zoo",
}

console.log(Object.keys(Animals));
console.log(Object.values(Animals));
