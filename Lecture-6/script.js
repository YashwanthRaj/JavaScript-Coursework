console.log("Hello World!")
window.console.log("Hello World 2!!")   // Window object

// DOM 
console.log(window.document)  // Will print the document object that is created by browser form the HTML

console.log(window.document.body)   // Accessing the body object inside the documtent. i.e the body of HTML

console.log(window.document.head) // Printing the head tag in HTML

// We dont need to specify window everytime as that will be taken care by javascript
console.log(document.head.childNodes) // this will print all the child nodes OR tags inside the head \
console.log(document.head.childNodes[1]) // Accessing the specific nodes

// Changing HTML segment with javascript
document.body.style.background = "green";


// Accessing elements by id
let heading = document.getElementById("heading");   // Accessing the element with this id
console.dir(heading);

// Accessing elements by class Name
let mainSection = document.getElementsByClassName("mainSection");  // Accessing all elements that has same class name
console.dir(mainSection);

// Accessing elements by Tag
let paragraphs = document.getElementsByTagName("p"); // Accessing all the paragraph tags
console.dir(paragraphs);

// Query Selector
let firstElement = document.querySelector("#heading");  // Through this, we can access element/elements using any of the above. This will return first element
console.log(firstElement)

let allElements = document.querySelectorAll("#heading"); // Will return all elements
console.log(allElements)

let allElementsUsingClass = document.querySelectorAll(".mainSection"); // Accessing class, we use .className 
console.log(allElementsUsingClass);


// Properties
console.dir(heading.tagName);  // Will give me the tag name for this element

console.dir(document.body.firstChild);  // Will return the first element declared inside the body

let div = document.querySelector("div");
console.log(div);
console.log(div.innerText);   // Will return all the inner text inside this div tag including its children's text

console.log(div.innerHTML);  // Similar to innerText, but will return with HTML tags

// We can also set the values
div.innerText = "This value is changed by the javascript, refer line 54";  // This will remove all the contents of the div tag and only include the div text

heading.innerText = "New Heading Assigned!! by javascript, refer line 56";
heading.innerHTML = "<i>Again New Heding Assigned by javascript, refer line 57</i>";


let hiddenHeading = document.getElementById("hiddenHeading");
console.log(hiddenHeading.innerText);  // Wont print anything because the element is hidden
console.log(hiddenHeading.textContent);  // Will print every text


// Practice Question - Create a h2 heading element with text - "Hello JavaScript". Append "from Apna College studens" to this heading
let heading2 = document.getElementById("pq1");
let innerTextOfHeading2 = heading2.innerText;
heading2.innerText = innerTextOfHeading2 + " from Apna College students";

// Practice Question - Create 3 divs with common class name - "box". Access them and add some unique text to each of them
let boxElememts = document.querySelectorAll(".Box");
console.dir(boxElememts);

// Regular way
boxElememts[0].innerText = "This is a changed first Element";
boxElememts[1].innerText = "This is a changed second Element";
boxElememts[2].innerText = "This is a changed third Element";

// Using array traversal
let idx = 1;
for (index of boxElememts) {
    index.innerText = `This is a new element with changed unique index ${idx}`;
    idx++;
}

