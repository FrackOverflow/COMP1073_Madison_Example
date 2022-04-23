/******************
* Data Structures *
******************/

/*** Indexed Collections ***/
// Array
var fruit = ["Apple", "Orange", "Banana", "Tomato"]; // Array Literal

// Indexing
console.log(fruit[0]);  // Apple
console.log(fruit[3]);  // Tomato
fruit[1] = "Lemon";     // values can be reassigned

// Array Length
console.log(`Fruit Array Length is ${fruit.length}`);   // Fruit Array Length is 4
console.log(fruit[fruit.length-1]);     // Array index starts at 0, this means the last index is length-1

// Iterations
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

fruit.forEach(function(aFruit) {
    console.log(aFruit);
})

// Stack
var myStack = [];               // Empty Array Literal
myStack.push("Tomato Soup");    // myStack = ["Tomato Soup"]
myStack.push("Ramen");          // myStack = ["Tomato Soup", "Ramen"]
myStack.push("Matzo Ball Soup") // myStack = ["Tomato Soup", "Ramen", "Matzo Ball Soup"]

console.log(myStack.pop());     // Matzo Ball Soup
console.log(myStack.pop());     // Ramen
console.log(myStack.pop());     // Tomato Soup

// Queue
var myQueue = [];
myQueue.push("Arrested Development");
myQueue.push("Ozark");
myQueue.push("Hot Fuzz")

console.log(myQueue.shift()); // Arrested Development
console.log(myQueue.shift()); // Ozark
console.log(myQueue.shift()); // Hot Fuzz

// Array Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// Concat: turns two arrays into a single array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);   // [1, 2, 3, 4, 5, 6]
arr3 = arr3.concat([7, 8]);     // [1, 2, 3, 4, 5, 6, 7, 8]

// Join: turns the array into a string
var fruit = ["Apple", "Orange", "Banana", "Tomato"];
console.log(fruit.join());      // Apple,Orange,Banana,Tomato
console.log(fruit.join(""));    // AppleOrangeBananaTomato
console.log(fruit.join(" - ")); // Apple - Orange - Banana - Tomato

// Push: Adds one or more elemnts to the end of the array and returns the resulting array length
let myArray = new Array('1', '2')
myArray.push('3')  // myArray is now ["1", "2", "3"]


// Pop: removes the last element from an array and returns it
let myArray = new Array('1', '2', '3')
let last = myArray.pop()
// myArray is now ["1", "2"], last = "3"


// Shift

// Unshift

// Slice: Extracts a section of an array and returns the new array

// Splice:




/*** Keyed Collections ***/
// Map

// Set

// Object

// Dict
