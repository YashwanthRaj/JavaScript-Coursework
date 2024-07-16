// For loops
for (let i = 0; i < 10; i++) {
    console.log("Hello World!");
}

// Calculate sum of 1 to 5 numbers
let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum += i
}

console.log("The sum is: ",sum)


// While loops
console.log("While loop")
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do While
let i = 0;
do {
    console.log("Hello")
    i++;
} while (i<10);

// For of loops
let variable1 = "Yashwanth"

for(let val of variable1){     // Iterate over string elements
    console.log(val)
}

// For in loops
let student = {
    name: "Yashwnth",
    age: 45,
    cgpa: 9.0,
    isPass: true
}; 

for (let key in student){
    console.log(student[key]);
}

// Practice Question 1 - Print all even numbers from 0 to 100

for(let i = 0; i <= 100; i++) {
    if ((i%2) === 0) {
        console.log(i);
    }
}

// Practice Question 2 - Creae a game where you start with any random game number, ask the user to keep guessing the game number until the user enters the correct value
let randomNumber = 7;
let gameEnd = false;

while (!gameEnd) {
    let userNumber = prompt("Please guess the number from range 0 - 10 !!");
    if (userNumber == randomNumber) {
        console.log("You guessed it right!!");
        gameEnd = true;
    }
}


// Strings
let strVariable = "My first string"; // String creation i.e variable declaration
console.log("The size of my string is: ",strVariable.length);  // inbuilt property to print string size
console.log(strVariable[0]); // Accessing the individual characters in the string

// Template literal with string interpolation
console.log(`The name of the student is ${student.name} and his gpa is ${student.cgpa}`);

let sampleString = "     Yashwant Raj     ";

console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());
console.log(sampleString.trim());

let sampleString2 = "012345678900";
console.log(sampleString2.slice(0,4)); // from position 0 to position 3
console.log(sampleString2.slice(5)); // from position 5 to end

console.log(sampleString2.concat("101112121400"));

let newSample = sampleString2.replace("01","ab");  // The replace will change its first occurance
console.log(newSample);

let newSample2 = sampleString2.replaceAll("0","a");  // The replace will change all occurance
console.log(newSample2);

console.log(strVariable.charAt(0)) // Will print the character at the position 

// Practice Problem Prompt the user to enter thier full name. Genarate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
let userName = prompt("Please enter your full name!!");

alert(`Your new user name is: ${"@"+userName + userName.length}`);