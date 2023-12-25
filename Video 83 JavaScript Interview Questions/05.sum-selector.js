function sumSelector(numbers) {
  let sum = 0;

  for (let number of numbers) {
    if (number < 0) break;
    sum += number;
  }

  return sum;
}

let numbers = [1, 2, 3, 4, 5, -6, 7, 8, 9];

let sum = sumSelector(numbers);
console.log("The sum is: " + sum);
