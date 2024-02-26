function callbackFunction() {
  console.log("I am  a callback function");
}

function higherOrderFunction(func) {
  console.log("I am higher order function");
  func();
}

higherOrderFunction(callbackFunction);

console.log("_______________________________________________");

const test = [1, 2, 3];

const test2 = function (test) {
  const result = [];
  for (let i = 0; i < test.length; i++) {
    result.push(Math.PI * test[i] * test[i]);
  }
  return result;
};
// console.log(test2);
const result = test2(test);
console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
const evenNumbers = numbers.map((num) => num / 2);
console.log(evenNumbers);
const filterNum = numbers.filter((num) => num % 2 === 0);
console.log(filterNum);
const redNum = numbers.reduce((acc, cval) => acc + cval, 0);
console.log(redNum);

const colors = ["red", "green", "yellow"];
colors.forEach((color) => console.log(color));
const fruits = ["kiwi", "banana", "apple"];
const mapFru = fruits.map((fruit) => fruit.toUpperCase());
console.log(mapFru);
const filNumbers = numbers.filter((num) => num >= 4);
console.log(filNumbers);
