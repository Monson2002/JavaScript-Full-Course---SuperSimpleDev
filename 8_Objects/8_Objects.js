// Q1
const product = {
  name: "Basketball",
  price: 2095
}

// Q2
product.price += 500;
console.log(product.price);

// Q3
product["delivery-time"] = "3 days";
console.log(product["delivery-time"]);

// Q4
const product1 = {
  name: "Football",
  price: 205
}
const product2 = {
  name: "Baseball",
  price: 95
}
function compareProducts(product1, product2) {
  return product1.price < product2.price ? product1.name : product2.name;
}
console.log(compareProducts(product1,product2));

// Q5
function isSameProduct(product1, product2) {
  for (const iterator in Object.keys(product1)) {
    if (Object.values(product1)[iterator] !== Object.values(product2)[iterator]) {
      return false;
    }
  }
  return true;
}
console.log(isSameProduct(product1, product2));

// Q6
const string = "Good Morning";
const lowerCase = string.split().map((el) => {
  return el.toLowerCase();
}).join("");
console.log(lowerCase);

// Q9
const anotherString = "test";
console.log(anotherString.repeat(2));
