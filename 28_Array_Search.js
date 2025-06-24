// 1. javascript Array Indexof()

const uniqueArray = [7, 13, 21, 34, 8, 2, 19, 45, 11, 26, 19];
console.log(uniqueArray.indexOf(8) + 1);

console.log(uniqueArray.indexOf(8, 26));
console.log(uniqueArray.indexOf(13));

// 2. js Array lastIndexof()

// Note : Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

console.log(uniqueArray.lastIndexOf(19) + 1);
console.log(uniqueArray.lastIndexOf(19));

// 3. js Array Includes()

console.log(uniqueArray.includes(2)); //output : true
console.log(uniqueArray.includes(41)); //output : false

// 4. Js Array find() & findIndex()

// Note : The find() method returns the value of the first array element that passes a test function.

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myfunction);
let second = numbers.findIndex(myfunction);
function myfunction(value, index, array) {
  return value > 18;
}

console.log(first);
console.log(second);

// 5. js Array findLast() & findLastIndex()

// Note : The findLastIndex() method finds the index of the last element that satisfies a condition.

const temp = [27, 28, 30, , 34, 40, 43, 35, 30];
let high = temp.findLast((x) => x > 40);
let low = temp.findLastIndex((x) => x > 40);
console.log(high);
console.log(low);
console.log(temp.findLast((x) => x * 10));
