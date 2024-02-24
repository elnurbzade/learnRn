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
