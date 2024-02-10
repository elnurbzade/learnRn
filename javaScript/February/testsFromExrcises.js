const items = [
  { name: "Apple", price: 1, tax: 10 },
  { name: "Orange", price: 2, tax: 15 },
  { name: "Mango", price: 3, tax: 20 },
];

let mixVal = 5;
// items.forEach(item => mixVal+=item.tax+=item.price)
items.forEach((item) => (item.price += mixVal));
console.log(items);

let mixVal2 = [items.price, items.tax];
console.log(mixVal2);

let totalPrice = 0;
items.forEach((item) => (totalPrice += item.price));
console.log(totalPrice);

totalTax = 0;
items.forEach((item) => {
  totalTax += item.tax;
});
console.log(totalTax);

// const items = [
//     { name: "Apple", price: 1, tax: 10 },
//     { name: "Orange", price: 2, tax: 15 },
//     { name: "Mango", price: 3, tax: 20 },
//   ];

const withRed = items.reduce((acc, val) => {
  return (acc += val.price);
}, 0);

console.log(withRed);

const withRed2 = items.reduce((acc, val) => {
  return (acc += val.tax);
}, 0);
console.log(withRed2);

const withRed3 = items.reduce((acc, val, val2) => {
  return (acc += val.price += val.tax);
}, 0);
console.log(withRed3);


