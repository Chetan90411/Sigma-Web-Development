function calculateTotal(items) {
  let totalCost = 0;

  for (let item of items) {
    totalCost += item.price * item.quantity;
  }

  return totalCost;
}

let items = [
  {
    name: "milk",
    price: 30,
    quantity: 4,
  },
  {
    name: "maggie",
    price: 14,
    quantity: 5,
  },
  {
    name: "Dairy Milk",
    price: 48,
    quantity: 10,
  },
];

console.log(`Total cost: ${calculateTotal(items)}`);
