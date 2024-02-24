console.log("Training from Lesson");

let x = 3;
const y = x++;
console.log(x);
console.log(y);

const users = {
  name: "Xeyyam",
  surname: "Kerimov",
  age: 12,
  phone: "+99455xxxxxxx",
};

const objKey = "name";
const result2 = users[objKey] !== undefined ? users[objKey] : "not found";

console.log(users[objKey]);
console.log(result2);

const n = 5;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

let sum = 0;
const n2 = 100;

for (i2 = 1; i2 <= n2; i2++) {
  sum += i2;
}
console.log("sum:", sum);

// const an = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
// console.log(an);

let a = 1;

switch (a) {
  case 1:
    a = "one";

  case 2:
    a = "two";

  default:
    a = "not found";
}
console.log(`The value is ${a}`);

let day = 8;
// const week = 7;
let dayName;

switch (day) {
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case "5":
    dayName = "FalseDay";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "noWeekDay";
}
console.log(`The day is ${dayName}`);

let result;

const operator = "+";
const number1 = parseFloat("4");
const number2 = parseFloat("5");

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1}+${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1}-${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1}*${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1}/${number2} = ${result}`);
    break;
  default:
    console.log("Invalid");
    break;
}

let fruit = "apple";
switch (fruit) {
  case "apple":
  case "mango":
  case "pineapple":
    console.log(`${fruit} is a fruit.`);
    break;
  default:
    console.log(`${fruit} is not a fruit.`);
    break;
}

const telebe = {
  name: "Elnur",
  age: 31,
  Experience: 5,
  Love: "JS",
};

for (let key in telebe) {
  console.log(`${key} => ${telebe[key]}`);
}

// const numbers = [1, 2, 3, 4, 5];
// for (let number in numbers) {
//   console.log(number);
// }

const numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//   console.log(number);
// }

for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]);
}

// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000
// }

// const qiymetler = {
// Travel: 5000,
// Eating: 1000,
// Sleeping: 1500
// }

// for ( let i in salaries) {

//     // add a currency symbol
//     let salary = "$" + salaries[i];
// xsxs
//  display the values
//     console.log(`${i} : ${salary}`);
// }

const arr = ["xeyyam", "ali", "elnur", "elshen"];
for (let i = 0; i < arr.length; i++) {
  console.log(`i->`, arr[i]);
}

console.log("__________");

let f = 1;
const m = 5;
while (f <= m) {
  console.log(f);
  f += 1;
}

let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}

let counter2 = counter;
console.log("Elave cavab:", counter2);

function func1(a, b, c) {
  console.log(arguments);
}

func1(1, 2, 3, "js");

// console.log("with const:", cName);
// console.log("with let:", lName);
console.log("with var:", vName);
var vName = "name3";
const cName = "name1";
let lName = "name2";
console.log("__________");

console.log(test);
var test;

var test2;
console.log(test2);

v = 5;
console.log(v);
var v;

console.log(z);
var z = 10;

var ac;
console.log(ac);
ac = 5;

function greet() {
  apa = "akakakaa";
  console.log(apa);
  var apa;
}

// console.log(apa);

// let z = 5;
// console.log(z);
// let z;

gredo();
function gredo() {
  console.log("Hi, there");
}

hrtr();
function hrtr() {
  console.log("asas");
}

let t = 10;
function test() {
  t = "on";
  return t;
}
console.log(t); // Output: 10
test(t);
console.log(t); // Output: on

function test2() {
  re = "Baku";
}
test2();
console.log(test2); // Output: [Function: test2]
console.log(re); // Output: Baku

let er = "Salam";
function eray() {
  let ay = "Dunya";
  console.log(er + " " + ay);
}
eray();
// console.log(er+ay);

let aq = "Çıx";
function aqurov() {
  let ur = "Get";
  console.log(aq + " " + ur);
  if (ur === "Get") {
    let ov = "burdan";
    console.log(aq + " " + ur + " " + ov);
  }
}
aqurov();

// let aq = "Çıx";
// function aqurov() {
//   let ur = "Get";
//   console.log(aq + " " + ur);
//   if (ur === "Get") { // Doğru karşılaştırma operatörünü kullanın
//     let ov = "burdan";
//     console.log(aq + " " + ur + " " + ov);
//   }

//   // 'ov' sadece if bloğunun içinde tanımlandığı için bu noktada 'ov' ulaşılamaz bir hale gelir.
//   // Bu yüzden bu noktada 'ov' kullanılamaz. Hata verir.
//   // console.log(aq + " " + ur + " " + ov);
// }
// aqurov();

function chooseColor() {
  console.log(`My favorite color is ${colorOne}`);
  var colorOne = "red";
  let colorTwo = "yellow";
  console.log(`My favorite color is ${colorOne} and ${colorTwo}`);
}
chooseColor();

if (true) {
  let myName = "your name";
  console.log(myName); //output=> "your name"
}

myFun();

function myFun() {
  var vNameno = "Baku";
  console.log(vNameno);
}

myLove();

function myLove() {
  let lnamone = "Izmir";
  console.log(lnamone);
}

var names = "Elshen";

function test3() {
  let ages = 31;
  if (ages > 25) {
    console.log((names = "Elnur"));
  }
}
test3();

var Bakim;
console.log(Bakim);
let Baki;
console.log(Baki);

// let globalVariable = 'I am global';
// function myFunction() {
//  let localVariable = 'I am local';

//  console.log(globalVariable); // Accessible, prints 'I am global'
//  console.log(localVariable); // Accessible, prints 'I am local'
// }
// console.log(globalVariable); // Accessible, prints 'I am global'
// // console.log(localVariable); // Not accessible, throws ReferenceError
// console.log(window.hasOwnProperty('globalVariable')); // true
// // console.log(window.hasOwnProperty('localVariable')); // false

var myGlobalVariable = "I am a global variable";
function myFunction() {
  console.log(myGlobalVariable);
}
console.log(myGlobalVariable);

// Example 2
function myFunction() {
  var myGlobalVariable = "I am a global variable";
  console.log(myGlobalVariable); // Accessible, prints "I am a global variable"
}
console.log(myGlobalVariable); // Accessible, prints "I am a global variable"
