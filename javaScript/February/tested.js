const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

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
    testSet("Elon", "Software Developer");
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

  const testArr = [1, 3, 4, 5, 6, 8, 9];
const testArr2 = testArr.reduce((umumi, nomre) => umumi * nomre, 2);
console.log("Hasil", testArr2);

const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" },
];
staffsDetails.forEach((staffDetail) => {
  let sentence = `I am ${staffDetail.name} a staff of Royal Suites.`;
  console.log(sentence);
});

const numbers = [1, 2, 4, 4, 3, 2, 22, 23, 344, 5];
let sum = 0;

const sumRed = numbers.reduce((total, num)=>total + num, 0);
console.log(sumRed);

function myFunction(item) {
  sum += item;
}
numbers.forEach(myFunction);
console.log(sum);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sorTest = fruits.sort();

console.log(sorTest);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted);
  

