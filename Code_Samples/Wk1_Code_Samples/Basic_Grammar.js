/****************
* Basic Grammar *
****************/

// Single line comment

/* Multi
 * Line
 * Comment
 */

/**********
 * Header *
 *********/

/*** Subheader ***/

/*** Semicolons ***/
var a = 1
var b = 2 // No semicolon required

var a = 1; var b = 2 // Semicolon required to seperate statements

/*** Declarations ***/
var uninitialized;

let myVar = 1;

// whats the difference between var and let? You can't redeclare a 'let'

var c = 'fizz';
var c = 'buzz'; // No issue here
let d = 'bizz';
let d = 'fuzz'; // Syntax Error

// Constants can't be uninitialized or changed
const noon = "12 pm";

// Sources:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
// https://www.tutorialspoint.com/difference-between-var-and-let-in-javascript