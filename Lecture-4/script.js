// Arrays
let array1 = [1,2,3,4,5456,456];
console.log(array1);
console.log(array1.length);  // will return the length of the array

let array2 = ["Yashwanth","Raj","person 1", "personn2"];
console.log(array2);

// Accessing the arrays indices
console.log(array2[2]);

// Changing the values of arrays.
array2[2] = "Washington";
console.log(array2[2]);

// Looping over an array using 
let heros = ["spiderman","black panther", "iron man", "doctor strange", "hulk", "black widow"];

// for loop
for (let index = 0; index < heros.length; index++) {
    console.log(heros[index]);
}

// for of loop
for (let position of heros) {
    console.log(position);
}

// Practice Question - For a given array with marks of students, find the average marks of the entire class
let marksOfStudents = [85,97,55,33,76,80,46,25];
let sum = 0;

for (let mark of marksOfStudents) {
    sum += mark;
}

console.log("The average is: ", (sum/marksOfStudents.length));

// Practice Question - For a given array with prices of 5 items, all items have an offer of 10% off on them. Change the array to store final price after applying offer
let prices = [250,645,300,900,50];

for (let i = 0; i < prices.length;i++) {
    let temp = prices[i];
    temp = temp - (temp * 0.1);
    prices[i] = temp;
}

console.log(prices)

// Push operation
let foodItems = ["Chips","Banana","Potatos","Onions"];
foodItems.push("Chicken");
console.log(foodItems);

// Pop operation
let deletedValue = foodItems.pop();
console.log(foodItems);
console.log("The deleted value is: ",deletedValue);

// toString operation
console.log(foodItems);
console.log(foodItems.toString());

// Concat 
let marvelHeros = ["Spiderman","Ironman","hulk"];
let dcHeros = ["Batman","Superman","Flash"];

let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

// Unshift
allHeros.unshift("Antman");
console.log(allHeros);

// Shift
let deletedHero = allHeros.shift();
console.log(deletedHero);
console.log(allHeros);

// Slice
console.log(allHeros.slice(1,4)); // print positions 1,2,3

// Splice
console.log(allHeros);
allHeros.splice(1,2,"Thor","Falcon");
console.log(allHeros);

allHeros.splice(3,0,"Vision"); // When you dont want to delete, but just add in that position
console.log(allHeros);

allHeros.splice(3,2); // When we dont want to replace or add anything but just delete
console.log(allHeros);

allHeros.splice(3); // Delete all elements from given positoin
console.log(allHeros);

// Practice Question - Create an array to store companies and perform operations
// a) remove the first company
// b) remove Uber and add ola in its place
// c) add amazon at the end

let campanies = ["Bloomberg","Microsoft","Uber","IBM","Netflix"];

// a
campanies.shift();
console.log(campanies);

// b
campanies.splice(1,1,"Ola");
console.log(campanies);

// c
campanies.push("Amazon");
console.log(campanies);