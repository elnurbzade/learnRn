const numbers = [2, 4, 65, 1, 56, 7, 123, 68, 234, 52, 12, 3, 4, 6];
const x2 = numbers.map((number) => {
  return number * 2;
});

console.log(x2);

const users = [
  {
    name: "Alice",
    age: 30,
    interests: ["coding", "hiking"],
    email: "alice@example.com",
  },
  {
    name: "Bob",
    age: 25,
    interests: ["gaming", "reading"],
    email: "bob@example.com",
  },
  {
    name: "Charlie",
    age: 35,
    interests: ["coding", "cooking", "reading"],
    email: "charlie@example.com",
  },
  {
    name: "Diana",
    age: 28,
    interests: ["yoga", "reading", "gardening"],
    email: "diana@example.com",
  },
  {
    name: "Ethan",
    age: 40,
    interests: ["hiking", "photography"],
    email: "ethan@example.com",
  },
  {
    name: "Fiona",
    age: 22,
    interests: ["music", "gaming"],
    email: "fiona@example.com",
  },
  {
    name: "George",
    age: 32,
    interests: ["coding", "gaming", "reading"],
    email: "george@example.com",
  },
  {
    name: "Hannah",
    age: 27,
    interests: ["writing", "yoga"],
    email: "hannah@example.com",
  },
  {
    name: "Ian",
    age: 30,
    interests: ["photography", "cooking"],
    email: "ian@example.com",
  },
  {
    name: "Julia",
    age: 24,
    interests: ["coding", "yoga"],
    email: "julia@example.com",
  },
];

const userFiltered = users.filter((user) => {
  return user.age >= 30;
});
console.log(userFiltered);

function testMe(arr) {
  arr.forEach((element) => {
    console.log(`${element.name} ${element.age}`);
  });
}

testMe(users);

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Book", price: 20 },
  { id: 3, name: "Smartphone", price: 500 },
  { id: 4, name: "Tablet", price: 300 },
  { id: 5, name: "Headphones", price: 150 },
  { id: 6, name: "Keyboard", price: 50 },
  { id: 7, name: "Mouse", price: 25 },
  { id: 8, name: "Monitor", price: 200 },
  { id: 9, name: "Camera", price: 400 },
  { id: 10, name: "Charger", price: 30 },
];



const addTaxToProducts = products.map((product) => ({
  ...product,
  name: `${product.name} (${product.id})`,
  tax: product.price * 0.1,
}));
console.log(addTaxToProducts);

const filteredPrices = products.filter((product)=> { return product.age >=50 && products.age <=300});
console.log(filteredPrices);
