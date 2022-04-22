// Declaring Primitives
// Boolean
var bool = true;
bool = false;
bool = 1 === 2; 

// Null
var nil = null;

// Undefined
var uninitialized;

// Numbers
var int = 10;
int = -22;
int = 13E+5;        // 13*10^5 = 1300000

var float = 2.2;
float = -0.000001;
float = 7E-3;       // 7*10^-3 = 0.007

// BigInt
var myInt = Number.MAX_VALUE; // Biggest possible int in JS ~1.79E+308
var myBigInt = BigInt(myInt) * BigInt(2); // Double the maximum int value, now thats a big int!

// String
var myString = "This is a string";
myString = myString + " with an extra addition";  // "This is a string with an extra addition"


// Dynamic Typing
var a = "I'm a string"; // This starts as a string, but a variable's type can be anything
a = 5;                  // No issue due to dynamic typing

// this can cause confusion
a = "String " + 5;      // This ends up as "String 5"
a = "5" + 5;            // This ends up as 10

// Scope
if (1 === 1) {
    let a = 2
}
//console.log(a); // Error: a is not defined

let b = 3 

if (1 === 1) {
    console.log(b); // No issue
}

//Hoisting Variables
console.log(c);             // Prints "undefined"
var c = "blah blah blah";

//Hoisting Functions
testFunc();                 // Prints "Hoisting is cool"
function testFunc() {
    console.log("Hoisting is cool");
}

// String to number
var myInt = parseInt("134");
var myFloat = parseFloat("1.02345");

// Number to string
var myString = "" + 134;
myString = "" + 1.02345;

// Operators
// Arithmetic
// Addition and Subtraction
var myNum = 1 + 2;  // 3
myNum = 1 - 2;      // -1
// Division and Multuiplication
myNum = 3 / 2;      // 1.5
// Remainder (Modulo)
myNum = 3 % 2;      // 1
myNum = 5 % 7;      // 2
// Exponent
myNum = 2**4;       //16

// Assignment
var myVar = 2;
myVar *= 3;     // 2 * 3 = 6
                // same as writing myVar = myVar * 3
myVar += 2;     // 6 + 2 = 8
myVar -= 2;     // 8 - 2 = 6
myVar /= 2;     // 6 / 2 = 3
myVar %= 2;     // 3 % 2 = 1


// Increment and Decrement
--myVar; // Reduce myVar by 1 before other actions are taken (prefix decrement)
++myVar; // Increase myVar by 1 before other actions are taken (prefix increment)
myVar--; // Reduce myVar by 1 after other actions are taken (postfix decrement)
myVar++; // Increase myVar by 1 after other actions are taken (postfix increment)

var x = 7;
var y = x++;    // Increment happens AFTER assignment
console.log(x); // Prints 8
console.log(y); // Prints 7

var x = 2;
var y = ++x;    // Increment happens BEFORE assignment
console.log(x); // Prints 3
console.log(y); // Prints 3



// Comparison
var myBool;
// Less than / Greater than
myBool = 1 < 2;     // true
myBool = 1 > 2;     // false
myBool = 1 <= 1;    // true
myBool = 1 >= 1;    // true
// Equality & Inequality
myBool = 1 == 1;    // true
myBool = 1 != 1;    // false
myBool = "1" == 1;  // true
//Strict Equality
myBool = "1" === 1; // false
myBool = "1" !== 1; // true

// Logical Operators
// AND
myBool = true && false          // false
myBool = true && true           // true
myBool = (1 == 1) && (2 > 0)    // true
// OR
myBool = false || false         // false
myBool = true || false          // true
myBool = true || true           // true
myBool = (1 == 1) || (1 != 1)   // true
// NOT
myBool = !true;     // false
myBool = !false;    // true
myBool = !(1 == 1); // false

// String interpolation
var myFavoriteNumber = 3;
var myShoeSize = 10;
var myName = "Madison";
var myString = `Hey my name is ${myName}, my shoe size is ${myShoeSize} and my favorite number is ${myFavoriteNumber}`;
console.log(`The string we built is: ${myString}`); // Prints "The string we built is: Hey my name is Madison, my shoe size is 10 and my favorite number is 3"

// Literals
var myVar = 1;              // Integer literal
myVar = "string literal";
myVar = true;               // Boolean Literal
myVar = 15n;                // BigInt literal
myVar = 1.4;                // Float literal

// Truthy and Falsy
var myBool = 0 || -0;   // false
myBool = null || NaN;   // false
myBool = 'false' && '0' // true

// String Escaping
var myString = "Here is a quote \"Wow\" - Owen Wilson";

var myString = "c:\\home";