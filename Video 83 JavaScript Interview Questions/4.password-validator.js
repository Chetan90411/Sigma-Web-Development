function passwordValidator(password) {
  if (password.length < 8) return false;

  let upper = false;
  let lower = false;
  let number = false;

  for (let char of password) {
    let asciiValue = char.charCodeAt();
    if (asciiValue >= 65 || asciiValue <= 90) upper = true;
    if (asciiValue >= 97 || asciiValue <= 122) lower = true;
    if (asciiValue >= 48 || asciiValue <= 57) number = true;
  }

  return upper && lower && number;
}

const password = "|3h1XELFv2r[";

const isStrong = passwordValidator(password);

if (isStrong) console.log("Password is Strong");
else console.log("Password is Weak");
