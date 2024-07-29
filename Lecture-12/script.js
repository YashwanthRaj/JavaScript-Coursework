// Because js is a asynchronous programming language, the three and four will not wait till the timeout function is completed

console.log("One");
console.log("Two");

function hello() {
    console.log("Hello World!!");
}
setTimeout(hello, 2000);     // The timeout will execute a funciton after the specified time. Time here is mentioned in milli seconds


console.log("Three");
console.log("Four");

// Callback
function sum(a, b) {
    console.log(a+b);
}

function calculate(a, b, callbackFuction) {
    callbackFuction(a, b);
}

calculate(2,3,sum);   // Here sum is a function that is passed as an arguement to another function


// We are going to build a funciton which will print the dataID and its data in an order. 
// After every 2 second, the data will be printed
// Illustration of callback hell

function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}

// This kind of code that is too difficult to understand with a lot of callbacks is called callback hell
getData(1,() => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


// Promises
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("The case is resolved");   // The resolve and reject are functions that are created by javascript
    // reject("The promise is rejected");
});

// an example of APIs that will return something
function getData1(dataID, getNextData1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success");
            if (getNextData1) {
                getNextData1();
            }
        }, 5000)
    })
}

let result = getData1(123);
console.log(result);

// Then and catch
const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a new Promise");
        // resolve("Success Message");
        reject("Failure Message")
    })
}


let newPromise = getPromise();
newPromise.then((res) => {     // This will run when promise is fulfilled  // The res here if the result message
    console.log("The promise is fulfilled - ", res);
});

// newPromise.catch((err) => {     // This will run when promise is not fulfilled/ reject  // The err is the error message
//     console.log("The Promise is rejected - ", err);
// });

// Promise chain - Writing a function which will run the second function after the first one is completed

function asynFunc1(IDData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1: ", IDData);
            resolve("1 Success!!")
        }, 4000);
    })
}

function asynFunc2(IDData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2", IDData);
            resolve("2 Success!!")
        }, 4000);
    })
}

// representation of callback hell code
let result1 = asynFunc1(1);
result1.then(() => {
    console.log("1 Success");
    let result2 = asynFunc2(2);
    result2.then(() => {
        console.log("2 Success")
    })
})

// Another way of writing the above code - This way is called promise chaining
// This way  is better to understad than the above segment, hence solving the problem of callback hell
asynFunc1(1).then((res) => {
    return asynFunc2(2);
}).then((res) => {   // Here the fun1 will retuen the second funciton, which will go into the then and so one
    return asynFunc2(3);
}).then(((res)=> {
    console.log(res)
}))


// Async Await
// Example API Call
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        }, 2000)
    })
}

// async function getWeatherData() {
//     console.log("1st Call")
//     await api();    // The await will pause all the other actions till this is completed
//     console.log("2nd Call");
//     await api();
// }
// getWeatherData()

// The above code insted of createing as a function and calling them, we can use IIFE to make it execute
// The down side to this type of representation is that this code cannot be run again.
(async function () {
    console.log("1st Call")
    await api();    // The await will pause all the other actions till this is completed
    console.log("2nd Call");
    await api();
})();

