// DOM Manipulation

// Get Attribute method 
let heading1 = document.querySelector("#mainHeading");
console.log(heading1.getAttribute("id")); 
console.log(heading1.getAttribute("name"));

let paragraph = document.querySelector(".paragraph");
console.log(paragraph.getAttribute("class"));

// Set Attribute method
heading1.setAttribute("id","updatedHeading");
console.log(heading1.getAttribute("id"));

// Style
let sampleDiv = document.querySelector(".box")
console.log(sampleDiv.style)  // view the styling of the element
sampleDiv.style.backgroundColor = "green";    // In CSS, its called background-color , so in javascript, we convert it in camel case 

let newBtn = document.createElement("button"); // Creating an HTML element in JS
newBtn.innerText = "ClickMe";

// Now we are going to access the div element with class name as box and then add the button inside it
let boxDiv = document.querySelector(".box");

// Adding it inside the div at end 
// boxDiv.append(newBtn);

// Adding it inside the div but at the first
// boxDiv.prepend(newBtn);

// Adding the element before the node itself i.e outside the div
// boxDiv.before(newBtn);

// Adding the element after the node itself i.e outside the div
boxDiv.after(newBtn);

// Removing the node
// newBtn.remove();


// Another example
let mainHeading1 = document.createElement("h1");
mainHeading1.innerHTML = "<i> This is sample heading created to understand the insert operation of the JS </i>";

document.querySelector("body").prepend(mainHeading1);  // We can append it in this way as well
// newHeading1.remove(); 



// Practice question - create a new button element. Give it a text "Click Me", background color of red & text Color of white. Insert the button as the first element inside the body tag. 

// Creating and designing the emelent
let pqbutton = document.createElement("button");
pqbutton.innerText = "Click Me";
pqbutton.style.background = "red";
pqbutton.style.color = "white";

// Adding it inside the body 
document.querySelector("body").prepend(pqbutton);

// Practice question - Create a p tag in html, give it a class and some styling. Now create a new class in CSS and try to append this class it the p element.

let newParagraph1 = document.querySelector(".sampleParagraph1");
newParagraph1.setAttribute("class","newClassForParagraph")  // In this way we can remove the old class and add a new class inside an html element

// But if we wish to keep the old styling, add multiple class to an elements, then we can use classList
console.log(newParagraph1.classList);

newParagraph1.classList.add("sampleParagraph1")  // This will keep the styling of both the css 
newParagraph1.classList.remove("newClassForParagraph") // This will remove the styling from the list