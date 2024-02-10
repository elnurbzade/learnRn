// Map //

const numbers = [1, 2, 3, 4, 5];

function double(arr) {
  return arr.map((num) => num * 2);
}
console.log(double(numbers));

function trio(arr) {
  return arr.map((num) => num * 3);
}
console.log(trio(numbers));

function four(arr) {
  return arr.map((num) => num * 4);
}

console.log(four(numbers));

function bole(arr) {
  return arr.map((num) => num / 2);
}

console.log(bole(numbers));

function mix(arr) {
  return arr.map((num) => num * 8 + 122 - 221);
}

console.log(mix(numbers));
