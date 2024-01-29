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
