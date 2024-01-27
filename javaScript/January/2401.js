// Task 1 //
const dayOfWeek = "Friday";
switch (dayOfWeek) {
  case "Monday":
    console.log("Monday - Study JS");
    break;
  case "Tuesday":
    console.log("Tuesday - Study ReactNative");
    break;
  case "Wednesday":
    console.log("Wednesday - Study CSS");
    break;
  case "Thursday":
    console.log("Thursday - Study Backend");
    break;
  case "Friday":
    console.log("Friday - Study Software");
    break;
  case "Saturday":
    console.log("Saturday - Walking");
    break;
  case "Sunday":
    console.log("Sunday - Rest");
    break;
  default:
    console.log("Invalid day");
    break;
}
console.log(dayOfWeek);

console.log("__________");

// const numbers = [525, 10, 6, 25, 13];
// let sum = [];
// for (i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sum += numbers[i];
// }

// console.log("Total sum:", sum); // Output : Total sum: 5251062513

const numbers = [525, 10, 6, 25, 13];
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum += numbers[i];
}

console.log("Total sum:", sum); // Output : Total sum: 579

console.log("__________");

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i]} - ${fruits[i].length}`);
}
//     console.log(`${fruits[i]}`)

// - ${fruits[i].length}`);
//  }
// for (const fruit of fruits) {
//     console.log(fruit);}
console.log("__________");

const student = {
  name: "Elnur",
  grade: 45,
};
if (student.grade >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

console.log("__________");

const students = [
  {
    name: "Elvin",
    grade: 54,
  },
  {
    name: "Elmir",
    grade: 45,
  },
  {
    name: "Elrun",
    grade: 54,
  },
  {
    name: "Elchin",
    grade: 11,
  },
];

for (const student of students) {
  if (student.grade >= 50) {
    console.log(`${student.name} - Pass`);
  } else {
    console.log(`${student.name} - Fail`);
  }
}
console.log("__________");
// Task 2 //
const color = "Red";
switch (color) {
  case "Red":
    console.log(`${color}-Stop`);
    break;
  case "Yellow":
    console.log(`${color}-Caution`);
    break;
  case "Green":
    console.log(`${color}-Go`);
    break;
  default:
    console.log(`${color} - Invalid`);
}
console.log("__________");

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

console.log("__________");

const products = {name: "User", price: 1500, inStock: true }

// let test = "";
//  for( const product in products){
//     console.log(test+=products[product])
//  }  Özümü sınamaq üçün ağlıma gəldi və yazdım.

 for ( const prod in products){
    console.log(`${prod}: ${products[prod]}`);
 }

 if (products.price<5000 && products.inStock ===true){
    console.log("Available");
 } else {
    console.log("Unavailable");
 }
 console.log("__________");


