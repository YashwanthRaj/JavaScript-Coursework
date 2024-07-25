// Direct way of object declaration

const studentName = {   // studentName object created
    fullName : "Yashwanth Raj Varadharajan",    // Attributes/properties of an object
    marks: 90,

    printMarks: function() {        // Methods of an object
        console.log("Marks is: ", this.marks);    // Considered same as [student.marks]. Inside an object, we use this keyword to reference a variable/property 
    },
};

// accessing the object
console.log(studentName.fullName);
studentName.printMarks;

// What exactly is a prototype
let arr = ["banana","apple","mango"]

console.log(typeof(arr)); // When we print this, we will get an object, not an array. This is bacause all the special data types are actually a type of an object.

// All the special objects will have an object inside them called prototype. It is through this prototype that we get the mathods like push etc inside the array object even though we did not create these methods

arr.push("Litchi");
console.log(arr);

// Prototype creation 
const employee = {
    calculateSalary() {
        console.log("Function to calculate salary of an employee");
    }
}

const person1 = {
    salary: 1000,
}

person1.__proto__ = employee;  // By declaring this, the methods of employee will be accessible from person1 object

console.log(person1.calculateSalary());

// This method is very useful when we need have multiple uses of a object
const person2 = {
    salary: 1000,
}

const person3 = {
    salary: 1000,
}

const person4 = {
    salary: 1000,
}

const person5 = {
    salary: 1000,
}

// By now declaring the below statements, we can now access the method from these objects
person1.__proto__ = employee;
person2.__proto__ = employee;
person3.__proto__ = employee;
person4.__proto__ = employee;

// If a methods name is same in prototype and object, then the one in the method will be considered

const person6 = {
    salary: 4000,
    calculateSalary() {
        console.log("I have a different salary from one mentioned in the the prototype")
    },
};

person6.__proto__ = employee;

console.log(person6.calculateSalary());
 

// Classes
class car {   // We have created a class - essentially a blueprint for the objects that are to be created 
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;     // Now whatever we are passing inside the method setBrand will be saved under the name brandName
        console.log(this.brandName);   // Whenever an object is declared and used inside a class, we will denote it as this.propertyName
    }
}

// We can create many objects with the help of this blueprint 
let santro = new car();   // An object that is created with class car
console.log(santro)  // This class will have all the methods and properties of parent class

let alto = new car();
console.log(alto);

santro.start;
santro.stop;
santro.setBrand("Hyundai");

// Constructor
class student {
    constructor(name, grades) {
        console.log("Constructor is being created!!")
        this.studentName = name;
        this.studentGrades = grades;
    }

    printFullName() {
        console.log("The studet's full name is: ", this.studentName);
    }

    printGrades() {
        console.log("The studenst grades are: ", this.studentGrades);
    }

    printStudentInformation() {
        console.log(`The students full name is ${this.studentName}, and his/her grades are ${this.studentGrades}`);
    }
}

let studentA = new student("Yashwanth",10);
studentA.printStudentInformation();


// Inheritance
class Person {
    constructor() {
        this.species = "Humans"
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("Jobless");
    }
}

class Engineer extends Person {
    work() {
        console.log("Work in an engineering firm");
    }
}

class Doctor extends Person {
    work(){
        console.log("Work in a hospial");
    }
}

let yashwanth = new Engineer();
yashwanth.eat();

let yashwathFromParallelUniverse = new Doctor();
yashwathFromParallelUniverse.work();

console.log(yashwanth.species);  // Inherit the properties as well

// Super keyword
class mainClass {
    constructor() {
        this.something = "Something";
    }

    aFunction() {
        console.log("Do something!!");
    }
}

class subClass extends mainClass {
    constructor(aProperty) {
        super();   // to invoke the parent class constructor. This not necessary if we are not declaring a constructor inside a derived class
        this.aProperty = aProperty;
    }

    printProperty() {
        console.log(this.aProperty);
    }
}

let someObject = new subClass("Property");
someObject.printProperty();


// We can also initialize the using the constructor in the parent class by passing the arguememt inside the super() inside the child constructor class
class sampleMain {
    constructor(arg) {
        this.somearg = "Sample Arg";
        this.arg = arg;
    }

    sampleFunction() {
        console.log("This is a sample Function!!")
    }
}

class sampleChild extends sampleMain {
    constructor(arg) {
        super(arg);    // We can initialize in this way too
    }

    printArg() {
        super.sampleFunction();    // With super keyword we can access the methods of parent class and use it inside a child class
        console.log(`Printing the arguement: ${this.arg}`)
    }
}

let againAnotherSample = new sampleChild("Yashwanth");
againAnotherSample.printArg();


// Practice Question - Create a website for your college. Create a class User with 2 properties, name and email. It also has a method called viewData() that allows user to view website data.
// Then create a new class called admin  which inherits from user. add a new method called editData to admin that allows it to edit website data. 


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`The users name is: ${this.name} and his/her email is: ${this.email}`);
    }
}

class admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        let newName = prompt("Enter new name");
        this.name = newName;
        console.log("Updated New Name");

        let newEmail = prompt("Enter new email");
        this.email = newEmail;
        console.log("Updated New email");
    }
}

let personUser = new User("Yash", "sample@gmail.com");  // This user will not have any access to change as not inheriting from admin


let personAdmin = new admin("Yashwanth","sampleuser@gmail.com"); // This will be able to access the data as inheriting from admin
personAdmin.viewData();

// personAdmin.editData();
personAdmin.viewData();

// Error Handling
a = 10;
b = 15;

try {
    // let c = a + b;
    let c = a + d;   // This code will give error
    console.log(c)
} catch(err) {
    console.log(err)
}