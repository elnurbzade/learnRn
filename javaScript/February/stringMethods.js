//Template Strings
let myName = "Elnur";
let mySurName = "Bayramzade";
console.log(`Hello ${myName} ${mySurName}, Welcome!`);

let sayHello = "Hamiya Salam             ";
console.log(sayHello.length);
let trimmedString = sayHello.trim();
console.log(trimmedString.length);

// Substring

let test1 = "My name is Elnur";
let indexNo = test1.indexOf("im");
console.log(test1.substring(indexNo, 11));

const sent = "This is avialable";

const ind = 5;
console.log(`The ${sent.charCodeAt(ind)} is ${sent.charAt(ind)}`);

let str = "Hello, world!";
let startIndex = -6;
let endIndex = -1;
let startIndexPos = 3;
let endIndexPos = 7;
let substringResult2 = str.substring(startIndexPos, endIndexPos);
console.log(substringResult2);
console.log(substringResult2.length);
let substringResult = str.substring(startIndex, endIndex);
console.log("substring()", substringResult);

let sliceResult = str.slice(startIndex, endIndex);
console.log("slice():", sliceResult);

const arr1 = ["Hello", "World"];
const arr2 = ["JavaScript", "is", "awesome"];
const arr3 = ["Concatenating", "arrays", "with", "concat()"];

const combinedString = arr1.concat(arr2, ",", arr3);

console.log(combinedString.join(" "));

const test2 = "This is my Code World";

const wo = "is";

console.log(`The word "${wo}" ${test2.includes(wo)?"is":"is not"} in sentence`);

const wo2 = "Code"

const firstIndex = test2.indexOf(wo2)

console.log(`The word "${wo2} is begin from ${firstIndex}`);


const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
);
// Expected output: "Index of the last "dog" is 38"


const date = new Date();
console.log(date.valueOf()); // Çıktı: 1644738528273 (milisaniye cinsinden tarih zaman damgası)
