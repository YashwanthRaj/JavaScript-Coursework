# JavaScript-Coursework
This repository has course file for JavaScript programming.

## Chapter 1: Variable data types

colsole.log(”Hello World!”);  → For printing a message.

; at the end of statements very similar to full stop in english language.

We make use of html to connect our javascript code to browser. Boiler Plate code in html visual studio code → Shift + !

The html files are directly connected to browser. We will write a html code to run the javascript code in the browser. 

<script src=”filename.js> </script> → To access another file through html

Variables → Containers for data. The variables can contain any data or no data. 

Javascript is a dynamically typed language. What this means is that we can change the datatype of the variable stored inside the variable. 

The = sign we call as assignment operator.

Rules for naming a variable:
• Variable names are case sensitive; "a" & "A" is different.
• Only letters, digits, underscore(_ ) and $ is allowed. (not even space)
• Only a letter, underscore(_) or $ should be 1st character.
• Reserved words cannot be variable names.

Declaration types for variables

var: Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const: Variable cannot be re-declared or updated. A block scope variable.

The block scope here defines that the code can be accessible inside the code block only. 

In 2015 we got a new standard for javascript, after which we stopped using var to declare variables. 

If we define a variable with let keyword, but not give any value inside it, then when we print its contents, we will get undefined. But the same will not work for const. const requires a value to be present inside the variable when declaration. 

Data Types → Denotes the type of data that is stored inside a variable

Primitive data types - The most basic ones [Number, String, Boolean, Undefined, Null, BigInt, Symbol]. We have 7 primitive types in java script.

Non-Primitive date types - Complex data types, usually formed with primitive data types. Eg Arrays and functions. Mostly a collection of primitive data type. Generally objects are stored in key value pairs. We can declare objects with const keyword, but we an change the variables inside them because they are not const. 

By default all the variables are undefined unless we declare a value inside them.

## Chapter 2: **Operators and Conditional Statements**

Comments in javascript:

Single line comment- // body

Multi line comment - /* body */

# Operators

Operators are used to perform operations. 

**Arithmetic operators** help in performing arithmetic operations

Basic - . +, -, *, /

Special Binary operators - modulo[%, will return reminder], exponential[**]

Special Unary operators -  increment[++], decrement[--]

There are two ways that we can use operators -

post increment / decrement → a++ / a -- [The value will change after operation is complete]

pre increment / decrement → ++a / -- a [The value will change before the operation is complete]

**Assignment Operators** helps in performing assignment operations

= → will assign the LHS value to RHS

+= → means add the value of RHS with LHS. Eg. a += 1 means a = a + 1 . We can change the + with any available arithmetic operators. 

**Comparison Operators** helps in comparing two values. Will return boolean according to the result. 

== → equal to [will work if the values are from different data type]

!= → Not equal to [will work if the values are from different data type]

=== → Equal to and type [will not work if the values are from different data type]

!== → Not equal to and type [will not work if the values are from different data type]

> → Greater than

>= → Greater than or equal to

< → Less than

<= → Less than or equal to

**Logical operators** helps in evaluating multiple operations and will give a final answer. Will return boolean according to the result. 

&& → Logical and

|| → Logical or

! → Logical not

# Conditional Statements

**if else**

Will run piece of code only if certain conditions are met. Three variants [if, if else, if else if else]. We can check multiple statements and in multiple levels, and run code based on the conditions. 

**Ternary Operators** takes three operands , another way to perform if else. preferred when simple action is to be performed. 

syntax → condition ? operand 1 : operand 2. Here if the condition is true, then the operand 1 will execute. else operand 2 will execute. 

MDN Docs - https://developer.mozilla.org/en-US/

This website is used when we want to read the documentation for language. 

**switch**

Evaluates expression comparing its value with a series of switch cases. This is useful when we know exactly what is the subset of values inside the condition variable. In switch, if one case turns true, then it will execute all the code below it. Hence we specify break which will come out of all the loop.

prompt(”some text”) → This code will take user input in form of pop up

alert(”alert message”) → This code will display an alert in the webpage in form of one time pop up.

# Chapter 3: Loops and Strings

## Loops

They run a piece of code again and again until the condition is met. 

### For Loops

These loop will have a variable, on which we will perform increment/decrement operation with specified step size. Until the condition is false, the loop will run. 

Syntax - for (initialize variable; set stopping condition; updation/step size) { Body }

Infinite loops are the ones that never ends. We should never do this in program. 

### While loops

Same as for loops, but here we initialize the variable before the loop and the updation condition occurs inside the loop. 

### Do While

Similar to while loops, only difference is that unlike in while loop where the condition is checked in start, here the condition is checked in end. This is why we have a guarantee that the do while loop will run at least once. 

### For of loop

Similar to for loops, but they help in iterating over strings and arrays. 

### For in loop

Similar to for loops, but they help in iterating over objects. Here the iterator will have the objects keys. 

## Strings

Sequence of characters used to represent text. They have some inbuilt properties and methods[function]. 

**Template literals** are the strings created with `` instead of traditional "" . The advantage is we can add variables inside them using ${var_name}. This way in which we are adding place holders for variables inside template literals is called **string interpolation**. Here {} is a code block. 

\n is an escape character which create a line break. 

\t will give us tab space. 

All these \n and \t, when counted under string length, these will not be counted as 2 characters, but as a single character. 

### String Methods/Functions

Built in functions to manipulate a strings. 

.toUpperCase() → Change the string to upper case

.toLowerCase() → Change the string to lower case

.trim() → removes white spaces 

.slice(start,end?) → returns parts of string. The end index is an optional value and is non inclusive

.concat(str2) → joins str 2 with base string

.replace(searchVal, newVal) → will replace the searchVal with newVal

.charAt(idx) → 

All these methods wont change the original string directly, just return a new value. We can rewrite the variable with new changes using this functions/methods.

# Chapter 4 - Arrays

Array is a linear collection of item. We generally prefer adding same data type elements in an array, although we can add data with multiple types. These are a sub type/variants of objects. Their keys are the position of the elements in the array. We can change the values of arrays. 

Unlike strings that we cannot change directly, we can change the value of arrays. 

[String → immutable, Arrays → Mutable]

* All the method names start with lowercase

### Array Methods

SOME of these methods will not change the original array, but will return a changed array. 

Push()  → Add an item in the array to the end of the array

Pop() → Delete an item from the end position

toString() → convert array to string

concat() → Joins multiple arrays and returns result

unshift() → add to start. Similar to push but will add in position 1

shift() → Delete from start and return. Similar to pop, but will remove from position 1

slice(strIndex, stopIndex) → returns a piece of array. The ending index is non inclusive

splice(strIndex, delCount, newEl1…) → change original array (add, remove, replace)

# Chapter 5: **Functions & Methods**

## Functions

Block of code that performs a specific task, can be invoked whenever needed. First we define functions and then we call it. We use functions to avoid redundancy in code. The code inside a function will run from top to bottom. 

We can pass in parameters/arguments inside a function that we can use to process output. If we want to return the output from a function, then we use return keyword. There cant be any code written after return keyword. The parameters that we define in a function are local variables that will be active only between the function’s code block. 

The arrow functions are compact way to represent smaller functions. 

## Methods

Similar to functions, but they will associated with objects [eg:  string**.toLowerCase()** → Here .toLowerCase() is a method] unlike a function that will return an output based on the input given. The functions when they associate themselves to an object, will become a method. 

**forEach** is a type of loop that we use in array. 

Eg: array.forEach( callBackFunction )           / / In javascript, parameters can be other functions. 

Callback Function is a function that is passed as an argument to another function . This function helps to execute some code for each element in the array. 

Inside foreach, we can use three parameters - val [value], idx [index], arr [the array itself]

**map** method creates a new array with the results of some operation. The value its callback **returns are used to form new array**. 

**filter** method created a new array of elements that five true for a condition/filter. Eg, all even elements of any given array. And even this method returns an array. 

**reduce** method will perform operations on an array and will return a single value. Eg: returning sum / average of all elements. Here we pass in two values, the result that we are going to calculate, and then the current value. The result will be updated with every iteration, then once all the array elements are iterated over with, then return the result. 

**What are higher order functions/methods ?**

These are the functions that use other functions as parameters or returns a function as a parameter.

# Chapter 6: Document Object Model

Three important concepts of web development :

HTML [Structure] , CSS [Style] , JS [logic]

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0cbbd51-b278-480c-b5ae-a8ddedc59569/36ac1790-caab-4d62-94d4-b942a7ef728c/Untitled.png)

### HTML Basics

HTML contains the content of the webpage like the text, words, etc. Entire code is inside the html tags. All the opening and closing tags are  <…> a </…>. The tag represents what kind of content is inside them. We can provide IDs to all these tags OR elements so that it will be easier to access these elements. The IDs must be unique. 

If there are group of elements that will follow/share same styling, then we can place them under same class. 

Two main tags/parts inside a html is head and body. The head tag contains all the meta information. Like the framework information, name of website, the logo etc. All the contents of the website will be inside the body tag. 

We use <script> </script> tag to add a javascript content to our HTML.

We use <style> </style> tag to add a css content to HTLM.

Both these tags inside the HTML file. But with these files, we can add the css or javascript code with the help of these tags. 

Usually we prefer to add the script (javascript) file inside the body tag, just before the ending body tag. The reason is that HTML code runs from top to bottom. Once the entire HTML content is finished running. then it will create the object/document. And as the javascript uses this document, if we try to load javascript before the HTML, then the document is empty/null.

### CSS Basics

CSS helps in styling the contents of the webpage. We use CSS to style the HTML contents. We reference the tag and give it a style. then use the link with relation as stylesheet, then reference as the file name inside the HTML code to attach the css file. In this way we can style any element of the HTML.  

In CSS, we can directly use the #{id name} to access and style the HTML element. And we can access the class by using .className. 

Whenever we make use of the alert or prompt in javascript, the code execution will be paused temporarily. 

When we open a webpage, when we inspect the page, the html code can be viewed inside the elements screen that we get once we click on inspect. And when we hover over the elements, those elements in the page will be highlighted as well. 

We can access the css of the page that is present inside the same elements console but in the bottom section. 

## Window Object

The window object represents an open window in a browser. It is browser’s object(not javascript’s) & is automatically created by browser. It is a global object with lots of properties and methods. 

Whenever we open a window in a browser, the browser will automatically create a window object. Many piece of like console.log(), alert, prompt … etc, all are methods of window object. Our code knows about the presence of window object, hence we do not need to specify window.{code}. The code will automatically take care of that. 

### What is DOM?

When a web page is loaded, the browser creates a DOM of the page. 

![DOM . The tags inside the HTML, body, head … etc can be visualized as child nodes of the above tag.  ](https://prod-files-secure.s3.us-west-2.amazonaws.com/f0cbbd51-b278-480c-b5ae-a8ddedc59569/bd15ca1f-46fa-4d96-be33-5211c9463491/Untitled.png)

DOM . The tags inside the HTML, body, head … etc can be visualized as child nodes of the above tag.  

The contents of a html files are accessible inside javascript file. This is achieved because the elements of html, will be created as an object inside the javascript that we can access. This object is called document. This document is available under the window object. When we press window.document, it will print the HTML contents. 

In basic terms, a document is a HTML that is converted into javascript object that we can access and preform operations. 

console.log() → Used to print on the console.

console.dir() → Helps us to print the properties and methods of special objects, like document. 

We can use **document.[subnode].[subnode] = {change/new value};** to access the html element and make dynamic changes/manipulation to the content. 

It is to make these dynamic changes is that we use DOM. 

## DOM manipulation

**Selecting with id:**

document.getElementById(”myId”)

Inside the code, generally all the ids are represented as #{id} 

**Selecting with class name:**

document.getElementByClassName(”myClassName”)

This will return an HTML collection of all the sub nodes/ tags/ elements that fall under the same class. 

**Selecting with tag:**

document.getElementByTagName(”p/h.. etc”)

This will also return a HTML collection. 

**Query Selector**

document.querySelector("myID / myClass / tag");   

Through this, we can access element/elements using any of the above. This will return first element. 

let allElements = document.querySelectorAll("myID / myClass / tag");

Similar to above, but will return all the elements. Returns node list. 

### Properties

tagName : returns the tagName of the element

innerText: returns the text content of the element in the element and all its children

innerHTML: returns the plain text or HTML contents in the element

textContent: returns textual content even for hidden elements

In a DOM tree, there is concept of first and last child. The first child is the one that is declared first in the code. Similarly the last child is the one that is declared last in a code.  

There are three types of nodes that are created, 

text nodes, comment nodes, element nodes

in DOM manipulation, we are concerned with only the element nodes that we can style and manipulate. So we include only element nodes in the DOM tree.

# Chapter 7 - DOM Part 2

## DOM Manipulation

Attributes - All the additional information that we give inside a HTML element. Eg - id, class, etc. 

.getAttribute(attr) → to get the attribute value

.setAttribute(attr) → to set the attribute value

There is another special attribute called style. With this we can access the css or styling of the element. All the property that we use inside the css, in javascript that will be the same but in camel case. 

We can create and add element in the document. 

let elementVariable = document.createElement(”div”)

Once we create an element, the changes wont be visible in the browser. We need to add the element inside the document. First we will select the node with respect to which we will add the new element. 

**Insert Elements**

node.append(el) → adds at the end of node(inside)

node.prepend(el) → adds at the start of node (inside)

node.before(el) → adds before the node (outside)

node.after(el) → adds after the node (outside)

Delete Element

node.remove() → removes the node

# Chapter 8 - Events

Events are the changes in the state if an object. Events are fired to notify code of changes that may affect code execution. 

Examples of an event :- 

Mouse events (click, double click etc)

keyboard events ( keypress, keyup, keydown)

Form events (submit etc)

Print event 

The way we make use of events and make them work according to our needs is called event handling. This event handling is concerned with what to do when we need once an event occurs. 

### **Event handling in JS**

We access and handle events with the node. 

node.event = () ⇒ {

// handle events here

}

The () ⇒ { } part is used when we want to create a function but not separately declare it. 

If we handle events using inline method (JS code straight inside HTML) and inside JS, the JS will be given priority. And inside the JS, the code[Handler] that is present at last will run, overwriting all the previous ones. The drawback here is we can create only one event handling method for one event.

**Event object -** Special object that stores information that has details about the event. All event handlers have access to the event objects properties and methods. 

### Event Listeners

node.addEventListener(event, callback)

node.removeEventListener(event, callback) 

For a node, whenever an event occurs, it triggers the callback function. Callback is a function that is passed as an argument inside another function. Callback is the event handler in our case. 

The advantage of event listeners over regular event handlers is that we can add multiple event handlers to same event.
