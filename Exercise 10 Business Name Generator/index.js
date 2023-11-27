/* Create a business name generator by combining a list of adjectives and shop name and another word

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let adjectives = "Crazy Amazing Fire ";
let shopNames = "Engine Foods Garments ";
let anotherWords = "Bros Limited Hub ";

let adjectiveProbability = Math.random();
let shopNamesProbability = Math.random();
let anotherWordsProbability = Math.random();

let businessName = "";

if (adjectiveProbability <= 0.33) {
    businessName = adjectives.slice(0, 6);
}
else if (adjectiveProbability <= 0.33) {
    businessName = adjectives.slice(6, 14);
}
else {
    businessName = adjectives.slice(14);
}


if (shopNamesProbability <= 0.33) {
    businessName += shopNames.slice(0, 7);
}
else if (shopNamesProbability <= 0.33) {
    businessName += shopNames.slice(7, 13);
}
else {
    businessName += shopNames.slice(13);
}

if (anotherWordsProbability <= 0.33) {
    businessName += anotherWords.slice(0, 5);
}
else if (anotherWordsProbability <= 0.33) {
    businessName += anotherWords.slice(5, 13);
}
else {
    businessName += anotherWords.slice(13);
}

// alert("Business name:  " + businessName); alert to display in browser or use console.log() to display in console
console.log("Business name:  " + businessName);
