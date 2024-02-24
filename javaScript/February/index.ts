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

let person2 = ['Danny', 1, true]; // This is identical to above example
person2[0] = 100;
console.log(person2);

interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
  }
  
  let saysStuff: Speech = {
    sayHi: function (name: string) {
      return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
  };
  
  console.log(saysStuff.sayHi('Heisenberg')); // Hi Heisenberg
  console.log(saysStuff.sayBye('Heisenberg')); 





