const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function redNum(arr) {
  return arr.reduce((test1, test2)=> test1+test2);
}

console.log(redNum(numbers));
