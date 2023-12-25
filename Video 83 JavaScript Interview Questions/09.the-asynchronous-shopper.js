async function placeOrder(product) {
  return new Promise((resolve) => {
    let delay = Math.random() * 6 * 1000;
    setTimeout(() => {
      console.log(`order placed ${product}`);
    }, delay);
  });
}

async function main() {
  placeOrder("laptop");
  placeOrder("mobile");
  placeOrder("tablet");
}

main();
