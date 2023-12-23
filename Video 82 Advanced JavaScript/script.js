async function sleep() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

function sum(a, b, c){
    return a + b + c;
}


// IIFE - Immediately Invoked Function Expression is used to make a function and call it as soon as it is defined
(async function main() {
    console.log(a1)

    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);
    
    // Destructuring in Arrays
    // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]; // rest opeerator 
    // console.log(x, y, rest);
    
    // Destructuring in Objects
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a, b} = obj;
    console.log(a, b);

    let arr = [1, 4, 6];
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr)) // spread operator spreads the array elements
})();

// local, global and block scopes

// Hoisting refers to the process where the interpreter appears to move the declarations to the top of the code before execution

var a1 = 6; // var expressions are hoisted 

// function declarations are hoisted 
// function expressions are not hoisted
