// The new Set() methods :

const letters = new Set(["a", "b", "c"]);

const numbers = new Set([5, 8, 12, 0, 45, 23, 89, 14, 35, 32]);
console.log(numbers);
// output : Set(10) : { 5, 8, 12, 0, 45, 23, 89, 14, 35, 32 }

// 1. add() method :
// If you add equal elements, only the first will be saved :

console.log(numbers.add(67, 45, 23));

let sum = 0;
for(const y of numbers){
    sum = sum + y[numbers];
}
console.log(sum); // output = NaN 
// not a number  

let a =  [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let sumofarray = 0;
for(let i = 0; i< a.length; i ++){
    sumofarray = sumofarray + a[i];
};
console.log(sumofarray);

// 2. has() method :
// Create a set :

const alphabet = new Set(["A", "b" , "c" ]);

// Does the Set contains "d" ?
console.log(alphabet.has("d")); //false


// ForEach() Method :
// Create a Set 
let string = "";
alphabet.forEach(function(value){
    string += value;
})

console.log(string); //output : Abc

// The value() Method :

// The value() method returns an Iterator Object with th e values in a Set. 

const smallleter = new Set(["d", "e", "f"]);

const MyIterator = smallleter.values();

// List all values
let val = "";
for(const y of MyIterator){
    val += y;
}
console.log(val);
// output : def

// 3. key() method :

// A Set has no keys, so keys() returns the same as values().

// This makes Sets compatible with Maps.

const str = new Set(["bob", "john", "maria"]);

let names = "";
for(const z of str.keys()){
    names += z;
}
console.log(names);
// output :bobjohnmaria

// 4. enteries() Method :

// Note : The entries() method is supposed to return a [key,value] pair from an object.

// A Set has no keys, so the entries() method returns [value,value].

// This makes Sets compatible with Maps.

const fruits = new Set (["apple", "banana", "chiku"]);

let fruit = "";
for(const a of fruits.entries()){
    fruit += a;
}
console.log(fruit);
// output :apple,applebanana,bananachiku,chiku