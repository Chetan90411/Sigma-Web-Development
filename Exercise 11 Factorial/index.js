// Write a program to calculate factorial of a number using reduce and using for loops

let number = prompt("Enter the number you would like to get factorial of ");

let arr = [];
arr.length = number
for(let i = 1; i <= number; i++)
arr[i-1] = i;

// using reduce
let factorial = arr.reduce((a , b) => a * b);
alert("Factorial is : " + factorial);

//using for loop
let fact = 1;
for(let i = 2; i <= number; i++) {
    fact *= i;
}

alert("Factorial is : " + fact);
