var myArray = [1, 2, 3];
let mArr2 = myArray.length - 1;
myArray.mArr3 = "bar";
console.log(myArray);

let t = 5;
let b = true;
let g = false;
let n = 23;
let s = "elnur";
console.log(false == 29);
console.log((b = s));
console.log((t = s));
// <---------------------------------------->

const numbers = [10, 5, 8, 12, 3, 93, 29, 12];

const [first, second, otherNum, , fifthNumber, qeqe, , qwqw] = numbers;
console.log(first >= 0);
const arrayLength = numbers.length;
console.log(arrayLength);
console.log(fifthNumber);
console.log(qeqe);
console.log(qwqw);

const cem = first + qeqe + qwqw;
console.log(cem);
const vur = first * second;
console.log(vur);
const boyuk = first > second;
console.log(boyuk);
const beraber = first < qeqe;
console.log(beraber);
const kicik = otherNum < qwqw;
console.log(kicik);
const beraboy = otherNum <= first;
console.log(beraboy);
const qaliq = qeqe % second;
console.log(qaliq);
const qaliq2 = 5 % 12;
console.log(qaliq2);
const isPositive = fifthNumber > 0;
console.log(isPositive);

const str = ["ad", "soyad", "yas"];
const nmb = [23, 12, 4343, 21, 13];
const bln = [true, false];
console.log(typeof str);
console.log(typeof nmb);
console.log(typeof bln);
console.log(first >= 0);

const test = [
  323,
  false,
  22,
  null,
  232,
  "arr",
  90,
  54,
  111,
  undefined,
  10,
  323,
  true,
  43,
];
const [l1, lf, l3, ln, l5, ls, l7, l8, l9, lu, , , lt, end] = test;
console.log(l1 == l8);
console.log(l3 == "22");
console.log(lf === "false");
console.log(lf == "false");
console.log(ln == lu);
console.log(null == undefined);
console.log(null === undefined);

const arr1 = [10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = ["1", "2", "3"];

const areEqual = arr1.every((value, index) => value === arr2[index]);
const areEqual2 = arr2.every((value, index) => value == arr3[index]);
console.log("Arraylar beraberdirmi?", areEqual);
console.log("Arraylar beraberdirmi?", areEqual2);

const test2 = [1, 2, 5, 3, 4, 5, 6, 7, 8, 9, 10];

const [num1, num2, num3, num4, num5, num6, num7, , , num10] = test2;

console.log(num1 != num2);
console.log(num3 !== num6);
