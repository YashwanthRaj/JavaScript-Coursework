// Printing something in console
console.log("Hello World");

// Variable declaration
var variableName = "Hello!! I am a Variable and I can be redeclared and updated" // We do not use var anymore
let variableName1 = "Hello!! I cannot be re-declared but updated"
const variableName2 = "Hello!! I cannot be re-declared or updated"

// Variable [Primitive Data Types]
let age = 24;  // Number
let price = 89.90;  // Number
let isTrue = true; // Boolean 
let fullName = "Yashwanth Raj Varadharajan";  // String

let bigIntVariable = BigInt("123");
let symbolVariable = Symbol("Hello!");

let a = null; // Denotes that there is nothing present inside the variable
let b = undefined; // Denotes that we dont know what is present inside 

// To print the variable
console.log(fullName);

// Variable [Non primitive data type]
// Object
const student = {
    fullNameStudent: "Yashwanth",
    age: 22,
    cgpa: 3.7,
    isPass: true 
};

console.log(student["fullNameStudent"]);  // To access an element inside the student object
console.log(student["age"]);  // Another way of accessing the element 

// Changing the value of elements inside a object
student.fullNameStudent = "Yashwanth Raj Varadharajan";
console.log(student.fullNameStudent);

// Practice question - Create an object called product which will have iformation about a product listed in amazon
const product = {
    productName: "Parker Pen",
    numberOfStars: 4.5,
    numberOfReviews: 4700,
    isOnDeal: true, 
    offerPercentage: 60,
    price: 200
}

console.log(product)
console.log(typeof product)
console.log(typeof product.productName)