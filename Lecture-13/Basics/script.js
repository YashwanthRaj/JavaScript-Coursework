// With cat facts api, just in case this does not work, Have given a second api to learn
// const url = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("Getting data......");
//     let response = await fetch(url);
//     console.log(response);  // Will be returned in JSsON format
//     let data = await response.json();
//     console.log(data);
// }

const url2 = "https://official-joke-api.appspot.com/random_joke"
const setupPara = document.querySelector("#setup");
const puchlinePara = document.querySelector("#punchline");
const button = document.querySelector("#showPunchline");

puchlinePara.hidden = true;

button.addEventListener("click", () => {
    puchlinePara.hidden = false;
});

const getFactsForURL2 = async () => {
    console.log("Getting Data.....")
    let response = await fetch(url2);
    console.log(response);
    let data = await response.json();
    console.log(data);

    // adding the data to html
    setupPara.innerText = data.setup;
    puchlinePara.innerText = data.puchlinePara
}

getFactsForURL2();