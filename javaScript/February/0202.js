// Part 1 //

const greet = (name, greeting = "Hello") => {
  return `${greeting}, ${name}!`;
};

console.log(greet("Elnur"));
console.log(greet("Elshen", "Salam"));
console.log("________");
// Additional task for Part 1 //
const test = (city, how = "Bizim") => {
  return `${how} ${city}!`;
};

console.log(test("Baki"));
console.log(test("is beautiful", "Azerbaijan"));

const test2 = (topic = "JavaScript", level = "hard") => {
  return `${topic} is very ${level}`;
};

console.log(test2());
console.log(test2);
console.log("________");

// Part 2 //
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(4));
console.log("________");
//Additional task for Part 2 //
const ftest = 12;
if (ftest !== 0) {
  const netice = factorial(ftest);
  console.log(`The factorial of ${ftest} is ${netice}`);
}
console.log("________");

//Part 3 //

const sumAll = (num2, ...numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum + num2;
};

console.log(sumAll(12, 2, 3, 4, 5, 6, 7, 8));
console.log("___________________");
// Part 4 //

const first = () => {
  second();
  console.log("Ilk funksiyanin bashlangici");

  console.log("Ilk funksiyanin sonu");
};
const second = () => {
  console.log("Ikinci funksiyanin bashlangici");
  third();
  console.log("Ikinci funksiyanin sonu");
};
const third = () => {
  console.log("Ucuncu funksiyanin bashlangici");
  fourth();
  console.log("Ucuncu funksiyanin sonu");
};
const fourth = () => {
  console.log("Son funksiyanin bashlangici");
  console.log("son funksiyanin sonu");
};

first();
console.log("____________");