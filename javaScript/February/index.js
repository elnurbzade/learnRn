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
var person;
person = ["John", 30, true];
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
var person2 = ['Danny', 1, true]; // This is identical to above example
person2[0] = 100;
console.log(person2);
var saysStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(saysStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(saysStuff.sayBye('Heisenberg'));
