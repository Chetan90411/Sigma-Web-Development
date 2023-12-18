
let container = document.querySelector('.container');


function delay(str) {
    let timedelay = Math.ceil(Math.random() * 7) * 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`<div class = "messages">${str}<span class = "blink">...</span></div>`);
        }, timedelay);
    })
}


let messages = ["Initializing Hacking", "Reading your files", "Password files Detected", "Sending all passwords and personal files to server", "Cleaning up"];

async function sendMessages() {
    for (let element of messages) {
        let x = await delay(element)
        container.insertAdjacentHTML("beforeend", x);
    }
}



sendMessages();

