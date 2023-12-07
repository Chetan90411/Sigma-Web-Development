let a = 6;

//  Factorial using Reduce
function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    return arr.slice(1,).reduce((a,b) => a * b); 
}

// Factorial using Classical for loop
function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac *= index;
    }
    return fac;
}

console.log(factorial(a));
console.log(facFor(a));
