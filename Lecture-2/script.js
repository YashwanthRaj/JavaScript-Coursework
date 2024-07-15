// operations
let a = 10;
let b = 5;

console.log("a + b = ", a+b);

// Conditinal statements
let age = 19;
let hasStateId = true

if ((age >= 18) && (hasStateId === false)) {
    console.log("The student is eligible to get license!!");
} else if ((age >= 18) && (hasStateId === true)) {
    console.log("The student is eligible to get license if he surrenders state id!!");
} else {
    console.log("The student is not eligible to get license!!");
}

// If we want to do a single action after the condition, then we can skip the block {}
let color = "pink";

if (color === "pink") console.log("The color is pink");

// ternary operator -> Just another way to write if else. Used when we have to perform a simple actions
let age1 = 33;
let result = age1 >= 19 ? true : false;

console.log(result);

// Switch

let variable = "a";

switch (variable) {
    case "a":
        console.log("a is printed!!");
        break;
    case "b":
        console.log("b is printed!!")
        break;
    case "c":
        console.log("c is printed!!")
        break;
}

// Practice question - get user input a number using primpt ("Enter a number: "). Check if the number is a multiple of 5 or not.
let userInput = prompt("Please enter the input number: ")

if ((userInput % 5) == 0) {
    console.log("The number ",userInput, " is a multiple of 5")
    alert("Multiple of 5") // Will show an alert in the webpage
} else {
    console.log("The number ",userInput," is not a multiple of 5")
    alert("Not a multiple of 5")  // Will show an alert in the webpage
}


// Practice question - Write a code which can give grades to students according to thier scores

let userGrade = prompt("Enter your grade: ")

if ((userGrade >= 90) && (userGrade <= 100)) {
    alert("You recieved an A grade")
    console.log("You recieved an A grade")
} else if ((userGrade >= 70) && (userGrade < 90 )) {
    alert("You recieved an B grade")
    console.log("You recieved an B grade")
} else if ((userGrade >= 60) && (userGrade < 70)) {
    alert("You recieved an C grade")
    console.log("You recieved an C grade")
} else if ((userGrade >= 50) && (userGrade < 60)) {
    alert("You recieved an D grade")
    console.log("You recieved an D grade")
} else if ((userGrade <= 49) && (userGrade >= 0)) {
    alert("You recieved an F grade")
    console.log("You recieved an F grade")
} else {
    alert("Invalid input")
    console.log("Invalid input")
}