console.log("__________");
// 2 - Part 1 //

function calSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const res = calSum(numbers);
console.log("The sum of the numbers is:", res);
console.log("__________");

// 2 - Part 2
let counter = 0;

while (counter < 5) {
  console.log(counter);
  counter++;
}

let counter2 = counter;
console.log("Elave cavab:", counter2);

console.log("__________");

// 2 - Part 3

let countDown = 5;

do {
  console.log(countDown);
  countDown--;
} while (countDown > 0);

const test3 = countDown;
console.log("Answer is:", test3);

console.log("__________");

// 2 - Part 4

function evaluateGrade(grade) {
  if (grade >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log("Grade: 75, Result:", evaluateGrade(75));
console.log("Grade: 45, Result:", evaluateGrade(45));
console.log("Grade: 90, Result:", evaluateGrade(90));

console.log("__________");

// Other trainings //

function cemReq(nom) {
  let test = 0;
  for (let j = 0; j < nom.length; j++) {
    test += nom[j];
  }
  return test;
}
let nom = [1, 525, 25, 66, 6, 999];
const testRes = cemReq(nom);

console.log("The test result is:", testRes);
console.log("__________");

let test2 = 91;
let cvb = test2;
while (test2 >= 90) {
  let cvb = test2;
  console.log(test2);
  test2--;
}

console.log("Answer is:", cvb); // Output - Answer is: 89

while (test2 >= 90) {
  test2--;
  console.log(test2);
}
let cvb2 = test2;
console.log("Answer is:", cvb2);

function hesNet(point) {
  if (point >= 50) {
    return "ok";
  } else {
    return "no";
  }
}

console.log("If the point is 40, answer is:", hesNet(40));
console.log("If the point is 60, answer is:", hesNet(60));
console.log("__________");