ab = 10;
b = 5;
c = 20;
e = 2;
ab += 5;
console.log(ab);
d = ab -= b;
console.log(ab);
console.log(d);
c /= b;
console.log(c);

e *= ab;
console.log(e);

b %= c;
console.log(b);

console.log((ab %= 2));

let str1 = "Geeks";
let str2 = "forGeeks";
let result = str1 + str2;
console.log(result);

const strng = "Elnur";
const strng2 = "leaRN";
const res = strng + " " + strng2;
console.log(res);

const testY = false;
const testX = true;
const testZ = false;
console.log(testY === testZ);

// const az = 1;
// console.log((az === 1) & (az === 2) & (az === 3));

console.log(12 % 19);

const hour = 14;
if (hour < 15) {
  console.log("Good day");
} else {
  console.log("Good Morning");
}

const test = 5;
if (0 <= test && test <= 100) {
  console.log(1);
} else if (100 < test && test <= 200) {
  console.log(2);
} else if (200 < test && test <= 300) {
  console.log(3);
} else if (300 < test && test <= 400) {
  console.log(4);
} else {
  console.log(5);
}

//   const test = 12;

if (test >= 11) {
  console.log(1);
} else if (test <= 10) {
  console.log(2);
} else if (test >= 30) {
  console.log(3);
} else if (test >= 40) {
  console.log(4);
} else {
  console.log(5);
}

function getPoint(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}

console.log(getPoint(85));
console.log(getPoint(72));
console.log(getPoint(45));

// const love = ["str",43,"num", 21, null, undefined]

// const [birinci, ikinci, , , ,sonuncu] = love;
// if (love.length>2) {
//   console.log(love.length *5);
// }
// else {
//   console.log("Hello World");
// }

const love = ["str", 43, "num", 21, null, undefined];

const [birinci, ikinci, , , , ...sonuncu] = love;

if (love.length > 2) {
  console.log(ikinci * 5);
} else {
  console.log("Hello World");
}

const main = "Elmeddin";
const cehdSayi = 3;
let cehd = 2;
if (cehd < cehdSayi) {
  console.log("Login successful!");
} else {
  console.log("Login failed");
}

const age = 31;
const isStudent = false;
const favCar = ["ferrari", "AlfaRomeo", "BMW"];

const istifadeci = {
  ad: "Elnur",
  staj: 5,
  isAdmin: true,
  learning: "Programing",
};
const { isAdmin, ad } = istifadeci;

const nomreler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [f, s, th, , fo, ...otNom] = nomreler;
// const tekCut = Nomreler(1,2,3,4,5,6,7,8,9,10)
// if (tekCut%2===0) {
//   console.log("Cem cutdur");
// } else {
//   console.log("Cem tekdir");
// }

const mesaj = "JavaScript & ReactNative are friends";
let ucMesaj = mesaj.toUpperCase();
let ssMesaj = mesaj.substring(0, 24);
console.log(ucMesaj);
console.log(ssMesaj);

const message = `Welcome ${main}!`;
console.log(message);

let isValue = null;
let undeValue;

const Nas = "23";
const convNum = Number(Nas);
console.log(Nas);

const myLoveTest = [
  { Topic: "JavaScript", Precent: 95 },

  { Topic: "ReactN", Precent: 88 },
  { Topic: "Writing", Precent: 69 },
  { Topic: "Swimming", Precent: 42 },
  { Topic: "English progress", Precent: 78 },
  { Topic: "Reading Book", Precent: 54 },
];

for (var i = 0; i < myLoveTest.length; i++) {
  if (myLoveTest[i].Precent < 50) {
    console.log("Point is F");
  } else if (myLoveTest[i].Precent >= 50 && myLoveTest[i].Precent < 60) {
    console.log("Point is E");
  } else if (myLoveTest[i].Precent >= 60 && myLoveTest[i].Precent < 70) {
    console.log("Point is D");
  } else if (myLoveTest[i].Precent >= 70 && myLoveTest[i].Precent < 80) {
    console.log("Point is C");
  } else if (myLoveTest[i].Precent >= 80 && myLoveTest[i].Precent < 90) {
    console.log("Point is B");
  } else if (myLoveTest[i].Precent >= 90 && myLoveTest[i].Precent < 100) {
    console.log("Point is A");
  }
}

function baliHesabla(bal) {
  if (bal < 50) {
    return "F";
  } else if (bal >= 50 && bal < 60) {
    return "E";
  } else if (bal >= 60 && bal < 70) {
    return "D";
  } else if (bal >= 70 && bal < 80) {
    return "C";
  } else if (bal >= 80 && bal < 90) {
    return "B";
  } else if (bal >= 90 && bal <= 100) {
    return "A";
  } else {
    return "Failed";
  }
}
for (var i = 0; i < myLoveTest.length; i++) {
  const netice = baliHesabla(myLoveTest[i].Precent);
  console.log(`${myLoveTest[i].Topic}: Point is ${netice}`);
}

let val = [12, 32, 44, 22, 113];
if ((val = !Number)) {
  console.log(push.val(1));
} else {
  console.log("hello world");
}

// if (!val.every(Number.isFinite)) {
//   val.push(1);
//   console.log(val);
// } else {
//   console.log("hello world");

if (val.length > 1) {
  console.log("Hello");
  console.log("World");
} else {
  console.log("Wbzdv");
} //Bunu anlamadım, səhvim var, amma nə olduğunu başa düşmədim.
