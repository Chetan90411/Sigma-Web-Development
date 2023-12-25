function mirror(str) {
  let mirrorStr = "";

  for (let e of str) {
    mirrorStr = e + mirrorStr;
  }

  return mirrorStr;
}

let str = "Mirror";

str += mirror(str);
console.log(str);
