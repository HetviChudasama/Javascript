// Note : A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// Javascript map Methods :


// 1. set method :
const fruits = new Map([
    ["apples", 500],
    ["banana", 300],
    ["oranges", 200]
]);


console.log(fruits.set("chiku", 100));
console.log(fruits.set("watermelon", 500));

// 2. get method :

console.log(fruits.get("apples")); //output : 500


console.log(typeof(fruits)); // output : object 

// Maps are Objects

console.log(fruits instanceof Map); //true

// Map Methods :

// 3. Map.size()
// Property returns the number of elements in a map :

console.log(fruits.size);
// output : 05 

// 4. Map.delete()
// method removes a map elements :

console.log(fruits.delete("apples"));
console.log(fruits.has("banana")); // output : true


// 5. Map.clear() :
// clear() method removes all the elements from a map :

console.log(fruits.clear());  //undefined
console.log(fruits); //output : Map(0) {}

// 6. Map.has() :
// method returns true if a key exists in a map:

console.log(fruits.has("banana")); // output : false

// Javascript map.groupBy() method :

// The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

// The Map.groupBy() method does not change the original object.

const fruit = [
    {name : "apples" , quantity :300
    },
    {
        name :"banananas" , quantity : 500
    },
    {
        name:"oranges" , quantity : 200
    },
    {
        name :" kiwi" , quantity : 150
    }
]

function mycallback({quantity}){
    return quantity > 200 ? "ok" : "low";
}

// group by Quantity :
const result = Map.groupBy(fruit, mycallback)
console.log(result);
