const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupedItems = items.reduce((accumulator, item) => {
  const category = item.category;
  if (!accumulator[category]) {
    accumulator[category] = [];
  }
  accumulator[category].push(item.name);
  return accumulator;
}, {});

console.log(groupedItems);

const items2 = [
  { name: "Elnur", surName: "Bayramzada", id: 525 },
  { name: "Elshen", surName: "Huseynov", id: 1025 },
  { name: "Omer", surName: "Bayramzada", id: 525 },
  { name: "Fuad", surName: "Huseynov", id: 1025 },
  { name: "Ali", surName: "Bayramzada", id: 525 },
];

const groupItems2 = items2.reduce((acc, val) => {
  const surName = val.surName;
  if (!acc[surName]) {
    acc[surName] = [];
  }
  acc[surName].push(val.name) && console.log("id:", acc[surName].push(val.id));
  return acc;
}, {});

console.log(groupItems2);

function greeting() {
  console.log("Hello World");
  5000;
}

setTimeout(greeting, 5000);

clearTimeout(greeting);

function testSet(name, role) {
  console.log(`Hello my name is ${name}`);
  console.log(`I am ${role}`);
}
// setTimeout(testSet, 5000, "Elnur", "Software Developer");
setTimeout(() => {
  testSet("Elnur", "Software Developer");
}, 2000);
clearTimeout(testSet);
console.log(`${testSet} is cleared`);

const timeOutId = setTimeout(function () {
  console.log("Hello World");
}, 2000);

clearTimeout(timeOutId);
console.log(`Timeout ID ${timeOutId} has been cleaned`);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const found = arr.find((num) => num > 4);
console.log(found);

const arr2 = [12, 32, 436, 7567, 3543, 334, 455, 22, 256, 353, 5];
const found2 = arr2.find((num) => num % 13 === 0);
console.log(found2);
