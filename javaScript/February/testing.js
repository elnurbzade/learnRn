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

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);