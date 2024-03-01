//Array.prototype.concat()

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = arr1.concat(arr2, "example");
console.log(arr3);
const arr4 = arr2.concat(arr1);
console.log(arr4);
const arr5 = [4, 5, [6, 7]];
const arr6 = arr1.concat(arr2, arr3, arr5);
console.log(arr6);
arr7 = arr5.concat(8, 9, [10, 11], ["ab", "bc"]);
console.log(arr7);

const num1 = [[1], [2]];
const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers);
// num1[0].push(4);
// console.log(numbers);
// num1[1].push(6);
// console.log(numbers);

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));

console.log([1, , 3].concat([4, 5]));
console.log([1, 2].concat([3, , 5]));

const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 3,
  0: 1,
  1: 2,
  2: 99,
  3: 10,
  4: 54,
};

console.log(arrayLike);
console.log(Array.prototype.concat.call(arrayLike, 3, 4));

console.log("______________________________________");
// CopyWithin
const words = ["a", "b", "c", "d", "e"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numbers:", numbers);
console.log(numbers.copyWithin(4, 0, 1)); // [1,2,3,1,5,6,7,8,9,10]

console.log('words:',words);
console.log(words.copyWithin(-1,-3,-2));

// Array.every 

const isBelowThreshold = (currentValue) => currentValue < 40;
const isTen = (currVal)=> currVal < 10;

// const array1 = [1, 30, 39, 29, 10, 13];


// console.log(array1.every(isTen));
// console.log(array1.every(isBelowThreshold));


// const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));

// console.log('array1', array1);
// console.log('result:',array1.fill(1000,2,9));

const array1 = [5, 12, 50, 130, 44]; 

console.log(array1.findLastIndex(isLargeNumber));

