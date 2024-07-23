let sampleBox = document.querySelector("#sampleBox1");
sampleBox.onmouseover = () => {
    console.log('The mouse is hovered above the selected div');
};

let sampleButton = document.querySelector("#eventObject");
sampleButton.onclick = (evt) => {    // evt is event object
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
};

let sampleEventListenerButton = document.querySelector("#eventlistners");
sampleEventListenerButton.addEventListener("click", () => {
    console.log("Event listener button triggered 1!!");
});
sampleEventListenerButton.addEventListener("click", (evt) => {
    console.log("Event listener button triggered 2!!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});

sampleEventListenerButton.addEventListener("click", () => {
    console.log("Event listener button triggered - Handler 3!!");
});

sampleEventListenerButton.addEventListener("click", () => {
    console.log("Event listener button triggered- Handler 4!!");
});

// Remove event listner
// This piece of code will not work as this will be considered as a separate function rather than the old one. Hence we create a funion and store it inside a variable name and then call it back for reference
sampleEventListenerButton.removeEventListener("click", () => {
    console.log("Event listener button triggered- Handler 3!!");
});

const eventHandler3 = () => {
    console.log("Event listener button triggered - Handler 3!!");
}

// Now the below two lines will cancel eachother out as they now reference to same callback function
sampleEventListenerButton.addEventListener("click", eventHandler3);
sampleEventListenerButton.removeEventListener("click", eventHandler3); 

// Practice Question - create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again
let isDarkMode = true;
let modeButton = document.querySelector("#modeToggle");

// let toggleModes = () => {
//     if (isDarkMode) {
//         document.body.style.backgroundColor="dimgray";
//         isDarkMode = false;
//     } else {
//         document.body.style.backgroundColor="white";
//         isDarkMode = true;
//     }
// }

// modeButton.addEventListener("click", toggleModes);

// We can also do the same thing with CSS classes

modeButton.addEventListener("click", () => {
    if (isDarkMode) {
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        isDarkMode = false;
    } else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        isDarkMode = true;
    }
});
