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
