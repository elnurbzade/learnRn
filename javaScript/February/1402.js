const customers = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    location: { city: "New York", country: "USA" },
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    location: { city: "Paris", country: "France" },
  },
  {
    id: 3,
    name: "Johny S.",
    email: "elba@yahoo.com",
    location: { city: "Baku", country: "Azerbaijan" },
  },
  {
    id: 4,
    name: "Ali",
    email: "ali@example.com",
    location: { city: "Washington", country: "USA" },
  },
  {
    id: 5,
    name: "Omar",
    email: "omar@example.com",
    location: { city: "Istanbul", country: "Turkey" },
  },
  {
    id: 6,
    name: "Ella",
    email: "ellabaa@yahoo.com",
    location: { city: "Kiev", country: "Ukraine" },
  },
];

const orders = [
  { orderId: 101, customerId: 1, product: "Laptop", quantity: 1, price: 1200 },
  {
    orderId: 102,
    customerId: 2,
    product: "Smartphone",
    quantity: 2,
    price: 800,
  },
  {
    orderId: 103,
    customerId: 3,
    product: "Smartwatch",
    quantity: 3,
    price: 400,
  },
  {
    orderId: 104,
    customerId: 4,
    product: "Smart book",
    quantity: 4,
    price: 200,
  },
];

// Customer Email List
const customerEmail = customers.map((customer) => customer.email);
console.log("Emails:", customerEmail);

// Expensive Orders
const ExpensiveOrder = orders.filter(
  (order) => order.quantity * order.price > 1000
);
console.log("Expensive Orders:", ExpensiveOrder);

// Find Customer by Name
const johnyCustomer = customers.find(
  (customer) => customer.name === "Johny S."
);
console.log("Customer J:", johnyCustomer);

// Index of a Specific Order
const order103 = orders.findIndex((order) => order.orderId === 103);
console.log("Index of 103:", order103);

// Check for Orders in a Specific Country
const ordersInFrance = orders.some((order)=>customers.find((customer)=> customer.id===order.customerId).location.country ==='France')
console.log('Orders in France:', ordersInFrance);


// Print Order Summaries
orders.forEach(order => {
    const customerName = customers.find(customer => customer.id === order.customerId).name;
    console.log(`Order ${order.orderId} by ${customerName}: ${order.quantity} x ${order.product} for $${order.price} each.`);
  });

// Sort Customers by Name
const sortedCustomers = customers.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log('Sorted Customers by Name:', sortedCustomers);

console.log("---------------------------------------------------------");
// // Adding Tasks
// const order102Index = orders.findIndex((order) => order.orderId === 102);
// console.log("Index of Order 102:", order102Index);

// const ordersInUSA = orders.some(
//   (order) =>
//     customers.find((customer) => customer.id === order.customerId).location
//       .country === "USA"
// );
// console.log("Orders in USA:", ordersInUSA);

// // Map //

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function double(arr) {
//   return arr.map((num) => num * 2);
// }
// console.log(double(numbers));

// function trio(arr) {
//   return arr.map((num) => num * 3);
// }
// console.log(trio(numbers));

// function four(arr) {
//   return arr.map((num) => num * 4);
// }

// console.log(four(numbers));

// function bole(arr) {
//   return arr.map((num) => num / 2);
// }

// console.log(bole(numbers));

// function mix(arr) {
//   return arr.map((num) => num * 8 + 122 - 221);
// }

// console.log(mix(numbers));

// function redNum(arr) {
//   return arr.reduce((test1, test2)=> test1+test2);
// }

// console.log(redNum(numbers));

// const items = [
//     { name: "Apple", price: 1, tax: 10 },
//     { name: "Orange", price: 2, tax: 15 },
//     { name: "Mango", price: 3, tax: 20 },
//   ];

//   let mixVal = 5;
//   // items.forEach(item => mixVal+=item.tax+=item.price)
//   items.forEach((item) => (item.price += mixVal));
//   console.log(items);

//   let mixVal2 = [items.price, items.tax];
//   console.log(mixVal2);

//   let totalPrice = 0;
//   items.forEach((item) => (totalPrice += item.price));
//   console.log(totalPrice);

//   totalTax = 0;
//   items.forEach((item) => {
//     totalTax += item.tax;
//   });
//   console.log(totalTax);

//   // const items = [
//   //     { name: "Apple", price: 1, tax: 10 },
//   //     { name: "Orange", price: 2, tax: 15 },
//   //     { name: "Mango", price: 3, tax: 20 },
//   //   ];

//   const withRed = items.reduce((acc, val) => {
//     return (acc += val.price);
//   }, 0);

//   console.log(withRed);

//   const withRed2 = items.reduce((acc, val) => {
//     return (acc += val.tax);
//   }, 0);
//   console.log(withRed2);

//   const withRed3 = items.reduce((acc, val, val2) => {
//     return (acc += val.price += val.tax);
//   }, 0);
//   console.log(withRed3);

//   const items3 = [
//     { name: "Apple", category: "Fruit" },
//     { name: "Onion", category: "Vegetable" },
//     { name: "Orange", category: "Fruit" },
//     { name: "Lettuce", category: "Vegetable" },
//   ];

//   const groupedItems = items3.reduce((accumulator, item) => {
//     const category = item.category;
//     if (!accumulator[category]) {
//       accumulator[category] = [];
//     }
//     accumulator[category].push(item.name);
//     return accumulator;
//   }, {});

//   console.log(groupedItems);

//   const items2 = [
//     { name: "Elnur", surName: "Bayramzada", id: 525 },
//     { name: "Elshen", surName: "Huseynov", id: 1025 },
//     { name: "Omer", surName: "Bayramzada", id: 525 },
//     { name: "Fuad", surName: "Huseynov", id: 1025 },
//     { name: "Ali", surName: "Bayramzada", id: 525 },
//   ];

//   const groupItems2 = items2.reduce((acc, val) => {
//     const surName = val.surName;
//     if (!acc[surName]) {
//       acc[surName] = [];
//     }
//     acc[surName].push(val.name) && console.log("id:", acc[surName].push(val.id));
//     return acc;
//   }, {});

//   console.log(groupItems2);

//   function greeting() {
//     console.log("Hello World");
//     5000;
//   }

//   setTimeout(greeting, 5000);

//   clearTimeout(greeting);

//   function testSet(name, role) {
//     console.log(`Hello my name is ${name}`);
//     console.log(`I am ${role}`);
//   }
//   // setTimeout(testSet, 5000, "Elnur", "Software Developer");
//   setTimeout(() => {
//     testSet("Elnur", "Software Developer");
//   }, 2000);
//   clearTimeout(testSet);
//   console.log(`${testSet} is cleared`);

//   const timeOutId = setTimeout(function () {
//     console.log("Hello World");
//   }, 2000);

//   clearTimeout(timeOutId);
//   console.log(`Timeout ID ${timeOutId} has been cleaned`);

//   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
//   const found = arr.find((num) => num > 4);
//   console.log(found);

//   const arr2 = [12, 32, 436, 7567, 3543, 334, 455, 22, 256, 353, 5];
//   const found2 = arr2.find((num) => num % 13 === 0);
//   console.log(found2);
