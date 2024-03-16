const e: string = "Hello World";

function calculate(a: number, b: number) {
  return a + b;
}

const num: number = calculate(20, 25);

console.log(num);
console.log(e);

let message: string = "Hello New Stack";

console.log(message);

let obj: any = { x: 0 };
console.log(obj);
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const obj: number = obj;

let myName2: string = "Alice";
console.log(myName2);

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + " !!!");
}
greet("john");

