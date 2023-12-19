let a = prompt("Enter the first number");

let b = prompt("Enter the second number");

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not a allowed")
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;

    try {
        alert(`The sum is ${sum*x}`);
        return true;
    } catch (error) {
        alert("Error a gya bhai");
        alert(error.name);
        alert(error.message);
        alert(error.stack);
        return false;
    }
    finally {
        alert("files are being closed and db connection is being closed")
    }
}

let c = main();
// try catch works synchronously
// therefore the script dies and catch block wont work in case of an asynchronous function

// in case we have return statement in either of try or catch block then also finally will be executed
