function filterProducts(products, filterCriterion) {
  return products.filter((product) => eval(filterCriterion));
}

let products = [
  {
    name: "Asus Tuf A15",
    price: 90000,
  },
  {
    name: "Apple Iphone 14",
    price: 70000,
  },
  {
    name: "Redmi Note 13 Pro",
    price: 20000,
  },
  {
    name: "Dell G15",
    price: 45000,
  },
];

let filterCriterion = "product.price < 50000";

products = filterProducts(products, filterCriterion);

for (let product of products) {
  console.log(product);
}
