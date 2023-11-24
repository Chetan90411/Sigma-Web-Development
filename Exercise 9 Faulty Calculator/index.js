/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as inputs from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the time

*/

let firstNumber = parseInt(prompt("Enter the first number: "));
let secondNumber = parseInt(prompt("Enter the second number: "));

let operation = prompt("Enter the operation which you would like to perform");

let probability = Math.random();

if (probability < 0.1) {
    if ("+" === operation) {
        console.log(firstNumber - secondNumber);
    }
    else if ("*" === operation) {
        console.log(firstNumber + secondNumber);
    }
    else if ("-" === operation) {
        console.log(firstNumber / secondNumber);
    }
    else if ("/" === operation) {
        console.log(firstNumber ** secondNumber);
    }
}
else {
    if ("+" === operation) {
        console.log(firstNumber + secondNumber);
    }
    else if ("*" === operation) {
        console.log(firstNumber * secondNumber);
    }
    else if ("-" === operation) {
        console.log(firstNumber - secondNumber);
    }
    else if ("/" === operation) {
        console.log(firstNumber / secondNumber);
    }
}
