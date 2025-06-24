// Basic Arrays Methods :

// 1. Array Length
const Fruits = ["Bananna", "orange ", "Apple", "Mango"];

console.log("The length of the Array is : ", Fruits.length);

// 2. Array toString();
console.log("String of the array :", Fruits.toString());

// 3. Array at()

// Note : The at() method returns an indexed element from an array.
// The at() method returns the same as [].

console.log("Finding the member of the given position is :", Fruits.at(2)); // output : Apple

// 4. Array join() : method also joins all array elements into a string.
// It Behaves just like tostring(), but in addition you can specity the seperator.

console.log("join using the seperator : ", Fruits.join("*"));
console.log("join using the seperator:", Fruits.join(" / "));

// 5. Popping and Pushing :

// note : When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.

// 5. Array Pop()

console.log("Using the pop methods: ", Fruits.pop());
console.log(Fruits);

// 6. Array push()
console.log("Using the push method :", Fruits.push("Kiwi"));

// the push method returns the new array length.
console.log(Fruits);

// 7. Shifting elements ()

// Note: Shifting is equivalent to popping, but working on the first element instead of the last.

console.log("Shifting :", Fruits.shift());
console.log(Fruits);

// 8. Javascript unshift():

// Note: The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

console.log("Unshifting in js:", Fruits.unshift("Lemon"));
console.log(Fruits);

// 9. CHanging the Elements :

console.log("Changing the elemenets in the array:", (Fruits[0] = "kiwi"));
// using the array length
console.log((Fruits[Fruits.length] = "Jammun"));
console.log(Fruits);
console.log(Fruits);

// 10. Array delete()

// Note :Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.

console.log(delete Fruits[0]); // output : true

const myGrils = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobians", , "Linus"];

const mychilderen = myGrils.concat(myBoys);
console.log(mychilderen);

const arr1 = ["cecillie", "Lone"];
const arr2 = ["Emill", "Tobians", "Linus"];
const arr3 = ["Robin", "Morgan"];

const mychilderens = arr1.concat(arr2, arr3, "Peter");

// 11. Array copyWithin()

const Fruit = ["Banana", "Orange", "Apples", "mangos"];

// Copy to index 2, the elements from index 0 to 2:
console.log(Fruit.copyWithin(2, 0, 2));

// 12. Flattening an Array :

// Note : The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

const arr = [
  ["loucky", "Subji"],
  ["age", 23],
  ["John", "Deo"],
  ["City", "NewYourk"],
];
console.log(arr.flat());

// 13. Array faltmap()

// Note: The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const array = [1, 2, 43, 4, 5, 67, 9, 90];
console.log(array.flatMap((X) => [X, X * 10]));
console.log(array.flatMap((X) => X / 10));

// 14. Splicing and Slicing Array
// Note: The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// Splice() Method is used for the add new items to an array.

// Using splice() to Remove Elements
const names = ["John", "Bob", "Kelvi", "Sofia"];
console.log(names.splice(2, 0, "Saas", "Johni"));
console.log(names);
console.log(names.splice(2, 2, "Sofi", "Deo"));
console.log(names);

// 15. JavaScript Array toSpliced()

const months = ["jan", "Feb", "mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

// 16. javascript Array Slice()

// Note: The slice() method slices out a piece of an array into a new array .
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits.slice(3));
console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));

// 17. Automatic tostring()

console.log(fruits.toString());