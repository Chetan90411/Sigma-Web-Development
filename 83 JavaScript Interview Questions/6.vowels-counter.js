function vowelsCounter(str) {
  let vowels = "AEIOUaeiou";
  let count = 0;

  for (let char of str) {
    if (vowels.indexOf(char) !== -1) count++;
  }

  return count;
}

const str = "Harry Is A great Instructor";
console.log(
  `The number of vowels present in the string are: ${vowelsCounter(str)}`
);
