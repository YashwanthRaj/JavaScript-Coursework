// Function definintion
function myFunction() {
    console.log("Hello World!!");
    console.log("The function is being called")
}

// Function Call
myFunction();

// Functions with parameters
function printYourName(name) {  // We pass parameter
    console.log("Your name is: ",name);
}

printYourName("Yashwanth");  // We give in arguement

// Function to calculate sum of two numbers
function sumOfNumbers(a,b) {
    console.log(a+b);
}

sumOfNumbers(9,8);

// If we want to return a value
function returnValue(a) {
    return (a+1);
}

let b = returnValue(6);
console.log(b);

// Arrow functions
const sumOfTwoNumbers = (a,b) => {
    return (a+b);
}

console.log(sumOfNumbers(3,4))

// In arrow funcitons, if we notice that the body is in single line, then we can skip the block code
const sumNumbers = (a,b) => console.log(a+b);

// Practice question - Create a function that takes a string as an arguement and returns the number of vowels in the string
function checkVowels(word) {
    let ourWord = word.toLowerCase()
    let numberOfVowels = 0;
    
    for (letter of ourWord) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            numberOfVowels += 1;
        }
    }

    return numberOfVowels;
}

console.log(checkVowels("AeIoUbbbbb"));

// Practice question - Write the above fuction in single arrow function
let vowelChecker = (word) => {
    let ourWord = word.toLowerCase()
    let numberOfVowels = 0;
    
    for (letter of ourWord) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            numberOfVowels += 1;
        }
    }

    return numberOfVowels;
}

console.log(vowelChecker("AeIoUbbbbb"));

// for each method
let heros = ["Spiderman", "Superman", "Hulk", "Black Widow", "Falcon"];

heros.forEach(function printHeros(val) {   // The val variable here will have the values of each index of the heros array
    console.log(val);
})

// For each method in single arrow
heros.forEach((val) => {
    console.log(val.toUpperCase());
});

// Use of all three types of parameters 
heros.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

// Practice question - for a given array of numbers, print the square of each value using the forEach loop.
let numberArray = [2,4,6,8,10];

// method 1
numberArray.forEach((val) => {
    console.log(val*val) ; // or we can use val**2
});

// method 2
const calculateSquare = (num) => {
    console.log(num**2);
}

numberArray.forEach(calculateSquare);  // In callback we just pass the function

// Map to iterate over the array
heros.map((val) => {
    console.log(val*val);
})

// Map with return functionality. The return inside map will return array
const newHeros = heros.map((val) => {
    return  val * 2;      // These returned values will be stored inside an array
})

console.log(newHeros);

// Filter method
let newArray = [1,2,3,4,5,6,7,8,9,10];

const evenArray = newArray.filter((val) => {
    return (val %2 === 0);  // This line will return val if the condition is true
})

console.log(evenArray);   // The returned array will have only even elements


// Reduce
const reduceArray =  newArray.reduce((accumelator, currentValue) => {    // Here the accumelator is the single value that we ate going to calculate, and the current value is the val that we have been using till now
    return accumelator + currentValue;
})

console.log(reduceArray);

// Using reduce to find the largest element inside the array
const largestElement = newArray.reduce((result, current) => {
    return result > current ? result : current;   // What this line means is it will check if result is greater than current. If yes will return result, else will return current
})

console.log(largestElement);

// Practice question - we are given an array of marks of students. Filter marks of students that scored above 90
let marks = [56,78,91,54,87,97,56,98,6,86];

const ninetyPlusArray = marks.filter((val) => {
    return val > 90;
})

console.log(ninetyPlusArray);

// Practice Question - Take a numver n as input from user. Create an array of numbers from 1 to n.
function addElements(num) {
    let finalArray = [];

    for(let i = 1; i <= num; i++){
        finalArray.push(i);
    }

    return finalArray;

}

let userInput = prompt("Please enter a number: ")
let outputArray = addElements(userInput)
console.log(outputArray)

// Find out the sum of all elements in the array
const sumArray = outputArray.reduce((result,current) => {
    return result + current;
})

console.log("The sum of all the elements is: ", sumArray);

// Find out the product of all elements in the array
const productArray = outputArray.reduce((result,current) => {
    return result * current;
})

console.log("The product of all the elements is: ", productArray);
