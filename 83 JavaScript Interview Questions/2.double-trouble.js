
function doubleTrouble(numbers) {
    let chknum;

    for(let i = 0; i < numbers.length; i++) {
        if (chknum !== numbers[i]) {
            chknum = numbers[i];
            numbers[i] *= 2;
        }
        else
        continue;
    }
} 

const numbers = [1,1,2,3,3,4,5,6];
doubleTrouble(numbers);

console.log("After Doubling Each Element")
numbers.forEach(number => console.log(number));