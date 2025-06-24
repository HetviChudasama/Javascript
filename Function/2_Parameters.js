// Default Parameters :

// If a function is called with missing arguments (less than declared), the missing values are set to undefined.

function myfun(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x, y;
}
console.log(myfun(2, 3));

// Default Paramters Values

function fun(a, b = 10) {
  return a + b;
}
console.log(fun(5)); // Output : 15

// Function Rest Parameters :

// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...arguments) {
  let sum = 0;
  for (let argumnet of arguments) {
    sum += argumnet;
  }
  return sum;
}
let x = sum(1, 2, 3, 4, 5);
console.log("sum of the nnumbers are : ", x);

// The Argumnets Object :

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findMax(1, 123, 500, 115, 44, 88));

