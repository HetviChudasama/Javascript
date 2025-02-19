Array.prototype.at()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.prototype.includes()
Array.prototype.indexOf()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()

// Example usage:
let arr = [1, 2, 3, 4, 5];

// Using at() method
console.log(arr.at(0)); // Output: 1

// Using concat() method
console.log(arr.concat([6, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]

// Using copyWithin() method
arr.copyWithin(0, 2);
console.log(arr); // Output: [3, 4, 5, 4, 5]

// Using entries() method
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}

// Using every() method
console.log(arr.every(x => x > 0)); // Output: true

// Using fill() method
arr.fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0]

// Using filter() method
console.log(arr.filter(x => x > 0)); // Output: []

// Using find() method
console.log(arr.find(x => x > 0)); // Output: undefined

// Using findIndex() method
console.log(arr.findIndex(x => x > 0)); // Output: -1

// Using flat() method
let arr2 = [1, 2, [3, 4], 5];
console.log(arr2.flat()); // Output: [1, 2, 3, 4, 5]

// Using flatMap() method
console.log(arr2.flatMap(x => x)); // Output: [1, 2, 3, 4, 5]

// Using forEach() method
arr.forEach(x => console.log(x));

// Using includes() method
console.log(arr.includes(0)); // Output: true

// Using indexOf() method
console.log(arr.indexOf(0)); // Output: 0

// Using join() method
console.log(arr.join(' ')); // Output: "0 0 0 0 0"

// Using keys() method
for (let key of arr.keys()) {
  console.log(key);
}

// Using lastIndexOf() method
console.log(arr.lastIndexOf(0)); // Output: 4

// Using map() method
console.log(arr.map(x => x * 2)); // Output: [0, 0, 0, 0, 0]

// Using pop() method
console.log(arr.pop()); // Output: 0

// Using push() method
arr.push(6);
console.log(arr); // Output: [0, 0, 0, 0, 6]

// Using reduce() method
console.log(arr.reduce((a, b) => a + b)); // Output: 6

// Using reduceRight() method
console.log(arr.reduceRight((a, b) => a + b)); // Output: 6

// Using reverse() method
arr.reverse();
console.log(arr); // Output: [6, 0, 0, 0, 0]

// Using shift() method
console.log(arr.shift()); // Output: 6

// Using slice() method
console.log(arr.slice(1)); // Output: [0, 0, 0, 0]

// Using some() method
console.log(arr.some(x => x > 0)); // Output: false

// Using sort() method
arr.sort((a, b) => a - b);
console.log(arr); // Output: [0, 0, 0, 0, 0]

// Using splice() method
arr.splice(1, 0, 1);
console.log(arr); // Output: [0, 1, 0, 0, 0]

// Using toLocaleString() method
console.log(arr.toLocaleString()); // Output: "0, 1, 0, 0, 0"

// Using toString() method
console.log(arr.toString()); // Output: "0,1,0,0,0"

// Using unshift() method
arr.unshift(1);
console.log(arr); // Output: [1, 0, 1, 0, 0, 0]

// Using values() method
for (let value of arr.values()) {
  console.log(value);
}


console.log(Array.isArray("John Deo"));
console.log(Array.from("John Deo"));