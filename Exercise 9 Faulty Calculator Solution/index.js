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
let probability = Math.random();
console.log(probability);

let firstNumber = prompt("Enter the first number: ");
let operation = prompt("Enter the operation which you would like to perform");
let secondNumber = prompt("Enter the second number: ");



let operators = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (probability > 0.1) {
    alert(`The result is ${eval(`${firstNumber} ${operation} ${secondNumber}`)}`);
}
else {
    alert(`The result is ${eval(`${firstNumber} ${operators[operation]} ${secondNumber}`)}`);
}
