const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function filNum(arr) {
  return arr.filter((num) => num % 2 === 1);
}
console.log("Tek numbers", filNum(numbers));

function filNum2(arr) {
  return arr.filter((num) => num % 2 !== 1);
}

console.log("Cut numbers", filNum2(numbers));
