/****************
 * Control Flow *
 ****************/

/*** If Statements ***/
if(true) {
    console.log("I always run");
} else {
    console.log("I never run");
}

if(1+1 < 2+2) {
    console.log("We can use any operator or variable as long as its a boolean");
} else if ( 1 < 0 || 2**9 < 27) {
    // some more code
}


/*** Switch Statements***/
switch (3.14) {
    case 2.33:
        console.log("case 1");
    case 3.14:
        console.log("case 2");
    default:
        console.log("unless you put breaks in, I will always run");
}

switch (2+2) {
    case 3:
        console.log("case 1");
        break;
    case 5:
        console.log("case 2");
        break;
    case 4:
        console.log("case 3");
        break;
    default:
        console.log("With these breaks in I won't run unless no case is hit");
}

/*** For Loops ***/
// For
for(var i = 0; i < 10; i++) {
    console.log(i);
}

var testArr = ["A", "B", "C", "D"];
for (var i = 0; i < testArr.length; i++) {
    console.log(testArr[i]);
}

// For-in

// For-of

/*** Do-While Loops***/