async function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    let delay = Math.random() * 11 * 1000; // giving random delay of 0-10 range

    setTimeout(() => {
      console.log(`${coffeeType} is ready`);
    }, delay);
  });
}

async function main() {
  brewCoffee("Cappuccino");
  brewCoffee("Mocha");
  brewCoffee("Espresso");
  brewCoffee("Frappuccino");
}

main();
