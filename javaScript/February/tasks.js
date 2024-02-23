// const phoneNumber = '+994777250992'

// const phoN = console.log(phoneNumber.slice(4,10));

// function test(){
//     if (phoN = number)
// }

function hidePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 13) {
    return "Wrong phone number";
  }

  const hiddenNumber =
    phoneNumber.substring(0, 6) + "*****" + phoneNumber.substring(11);

  return hiddenNumber;
}

const phoneNumber = "+994777250992";
const hiddenPhoneNumber = hidePhoneNumber(phoneNumber);
console.log(hiddenPhoneNumber);

const number3 = parseFloat("42 is the answer 343");
console.log(number3); // Output: 42

const num3 = parseInt("A", 16);
console.log(num3);

const num4 = parseInt("101010", 2);
console.log(num4);

const a1 = 5e20;
console.log(a1);

const a2 = 5e-1;
console.log(a2);

const a3 = 0xff;
console.log(a3);
const b = 0xd;
console.log(b);

const strNum2 = "19" - 9;
console.log(strNum2);

const str = "12" / "4";
console.log(str);

const str3 = "2" * "3";
console.log(str3);

const str4 = "11" - "2";
console.log(str4);

const strNum3 = "44" * 2;
console.log(typeof strNum3);

const strNum4 = "14" / 7;
console.log(typeof strNum4);

const strNum = "4" + 9;
console.log(strNum);

const numStr = 1 + "2";
console.log(typeof numStr);

const numStr2 = 6 - "3";
console.log(numStr2);

const numStr3 = 7 * "2";
console.log(numStr3);

const numStr4 = 9 / "3";
console.log(numStr4);

const numStr5 = 5 / "0";
console.log(numStr5);

const a = 0.1 + 0.2;
console.log(a);
const a4 = 0.1 + 0.2;
console.log(a4.toFixed(1));

const a5 = 9999999999999999;
console.log(a5);

const str2 = "12" + "4";
console.log(str2);

const testStrNum = Number.MAX_SAFE_INTEGER;
console.log(testStrNum);

const testStrNum2 = Number.MIN_SAFE_INTEGER;
console.log(testStrNum2);

let x = 1;
let y = 2;
x = y;
y = 100;
console.log(x);

let aa = 121;
let bb = aa;

aa = 123;
console.log(bb);

let test2 = { myName: "Jenny", age: 12 };
let test3 = test2;

test2.age = 32;
console.log(test3.age);

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(5, 3));
console.log(difference(3, 90));

console.log(Math.abs(-131));

console.log(Math.abs(" "));
console.log(Math.abs(undefined));
console.log(Math.abs([2, 1]));
console.log(Math.abs("21"));
console.log(Math.abs("-32"));
console.log(Math.abs(-Infinity));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

function getRandomIntInclusive(min, max) {
  const minCeiled = math.ceil(min);
  const maxFloored = math.floor(max);
  return;
}

console.log(Math.pow(-0.5, 0.4));

const test1 = { a: 1, b: 2, c: 3 };
const test4 = { c: 4, d: 5, e: 6 };
const test5 = { f: 6, g: 7, h: 8 };

const returnTests = Object.assign(test1, test4, test5);
const returnTests2 = Object.assign(test5, test4, test1);
console.log(returnTests);
console.log(test1);
console.log(test4);
console.log(returnTests2);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true

let showMe = {
  myFunc: function () {
    console.log(
      `My name is ${this.myName}. I am ${this.age}. It is ${this.isBool}.`
    );
  },
};

let person = Object.create(showMe);
person.myName = "Elvis";
person.age = 23;
person.isBool = true;
person.myFunc();

// Bir prototip nesne oluşturalım

let animal = {
  soundVol() {
    console.log(this.sound);
  },
};

let dog = Object.create(animal);
dog.sound = "Hov-Hov";

dog.soundVol();

let sentence={
  sentFunc(){
    console.log(`I am learning ${this.program}. I have great ${this.skill}. This is very ${this.how}!`);
  },
};

let me=Object.create(sentence)
me.program = "JavaScript";
me.skill = "patience";
me.how = "interesting";
me.sentFunc()
