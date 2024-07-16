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
