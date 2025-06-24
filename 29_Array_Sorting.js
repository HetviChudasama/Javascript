// 1. Aplabetic Sort
// 2. Numberic sort :

// 1. Alphabetic sort :
// Sorting an Array :

// 1. sort() method sorts an array alphabetically:
const uniqueStringArray = [
  "apple",
  "banana",
  "cherry",
  "dragonfruit",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
];

console.log(uniqueStringArray.sort());

// 2. reversing an array :

console.log(uniqueStringArray.reverse());

// By combining sort() and reverse(), you can sort an array in descending order:

// console.log(uniqueStringArray.sort());
// console.log(uniqueStringArray.reverse());

// 3. Array toSorted() Method:
console.log(uniqueStringArray.toSorted());

// Note :  toSorted() method as a safe way to sort an array without altering the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

// Note: toReversed() method as a safe way to reverse an array without altering the original array.

console.log(months.toReversed());

// Numeric Sort :

// by default , the sort() function sorts values as strings.

// this works well for strings ("Apple" comes before "Banana").

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

//  The Compare Function :
// function (a,b) {return a- b};

// Sorting an Array in Random Order:

console.log(
  points.sort(function () {
    return 0.6 - Math.random();
  })
);

// Sorting Objects Arrays :

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(cars.sort());
console.log(
  cars.sort(function (a, b) {
    return a.year - b.year;
  })
);

cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});

//   Stable Array Sort():
const myArr = [
  { name: "X00", price: 100 },
  { name: "X01", price: 100 },
  { name: "X02", price: 100 },
  { name: "X03", price: 100 },
  { name: "X04", price: 110 },
  { name: "X05", price: 110 },
  { name: "X06", price: 110 },
  { name: "X07", price: 110 },
];

console.log(myArr.sort());

// Using Math.max() on an array :

const maximum = [4, 6, 7, 8, 12, 67, 90, 12, 45, 100];
console.log(Math.max(maximum));

// Finding the Min:

function mimimum(arr) {
  let len = arr.length;
  let min = arr[0];

  for (let i = 0; i < len; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

console.log(mimimum([45, 78, 12, 3, 4, 5, 7, 12, 1]));

// Finding the Max:

function maximumnumber(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log(maximumnumber([34, 56, 7, 8, 2, 3, 557, 9, 9, 0]));
