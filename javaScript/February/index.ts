function say() {
  console.log("Hello World");
}
say();

var maash = 1000;

var realMaash = (maash * 1000) / 30;

console.log(realMaash);

// interface Magic {
//   country: string;
//   city: string;
//   isMarried: boolean;
//   age: number;
// }
let person: [string, number, boolean];
person = ["John", 30, true];
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

person[0] = "Alice";
console.log(person);



