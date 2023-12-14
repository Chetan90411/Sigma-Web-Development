console.log("Harry is a hacker");
console.log("Rohan is a hecker");


// Due to the asynchronous nature of JavaScript the content of the setTimeout function is executed only after finisihing the main call stack 
// Thats why The End will be printed first
setTimeout(() => {
    console.log("I am inside setTimeout");
}, 2000);

setTimeout(() => {
    console.log("I am inside setTimeout 2");
}, 0);

console.log("The End");

// Callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete an action

// const fn = () => {
//   console.log("Nothing")
// }


const callback = (arg, fn) => {
    console.log(arg)
    fn()
}


const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc);
}

loadscript(src = "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// Callback Hell or Pyramid of Doom is when the code becomes too difficult to manage because of callback inside callbacks.
// To manage this we use Promises
