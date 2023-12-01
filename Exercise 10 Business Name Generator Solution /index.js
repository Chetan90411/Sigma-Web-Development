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

let probability = Math.random();
let first;
let second;
let third;

if (probability <= 0.33) {
    first = "Crazy";
}
else if (probability <= 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

probability = Math.random();
if (probability <= 0.33) {
    second = "Engine";
}
else if (probability <= 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}

probability = Math.random();
if (probability <= 0.33) {
    third = "Bros";
}
else if (probabilty <= 0.66) {
    third = "Limited";
}
else {
    third = "Hub";
}

// console.log("Business name:  " + businessName);
alert(`Business name: ${first} ${second} ${third}`);

