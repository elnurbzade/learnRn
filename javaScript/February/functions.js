// function mesajGoster(gonderen, metin) { // argümanlar: gonderen, metin
//     console.log(gonderen + ': ' + metin);
//   }

//   mesajGoster('Ahmet', 'Merhaba!'); // Ahmet: Merhaba! (*)
//   mesajGoster('Mehmet', "Naber?"); // Mehmet: Naber? (**)

function mesaj(ne, hara, niye) {
  console.log(ne + " " + hara + " " + niye);
}
mesaj("Salam", "Baki");
mesaj("Sagol", "Gence");
mesaj("necesen", "Kishi", "Bala");

console.log("______________");

function mesaj3(apple, banana) {
  fruits = " " + apple + " " + "peach" + banana;

  console.log(fruits + "banana");
}

let apple = "alma";
let banana = "banan";
mesaj3(apple, "meyve");
mesaj3(banana, "terevez");
console.log(apple);
console.log(banana);
console.log("______________");

function test(meyve, terevez) {
  (qida = meyve + " "), +terevez;
  console.log(qida + " " + "faydalıdır");
}

let meyve = "alma";
let terevez = "xiyar";

let armud = meyve + " " + "is ok";
let pomidor = terevez;

console.log(meyve + " " + "ve" + " " + terevez + " xeyirlidir");
test(meyve, terevez);
test(armud, pomidor);
test(qida);

// function mesaj2(gonderen, metin) {
//   gonderen = "*" + gonderen + "*"; // "gonderen" biraz daha güzel hale getirildi.

//   console.log(gonderen + ": " + metin);
// }

// let gonderen = "Mahmut";

// mesaj2(gonderen, "Merhaba"); // *Mahmut*: Merhaba

// "gonderen" değişkeninin değeri sadece fonksiyon içerisinde değişti. Çünkü bu değişken paslandığında fonksiyon yerel bir kopyası üzerinde çalışır
// console.log(gonderen); // Mahmut

console.log("______________");

function mesajGoster(gonderen, metin = "metin gönderilmedi") {
  console.log(gonderen + ": " + metin);
}

mesajGoster("Mahmut"); // Mahmut: metin gönderilmedi

function sendMe(Elish, text = "Mesaj getmədi", vaxt = "today") {
  console.log(Elish + ":" + text + ":" + vaxt);
}
sendMe("Elnur");
console.log("______________");

function tpl(a, b) {
  return a + b;
}
let elv = tpl(12, 13);
console.log(elv);

console.log("______________");

function doNothing() {}

console.log(doNothing() === undefined);

console.log("______________");

function countDown(num) {
  console.log(num);
  const newNum = num - 1;
  if (num > 0) {
    countDown(newNum);
  }
}

countDown(5);
// // program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);

console.log("______________");

// function factorial(x){
//     if(x === 0){
//     return 1;
// } else {
//     return x * factorial(x-1);
// }
// }
// const nmb2 = 4;
// if (nmb2>2){
// let res = factorial(nmb2);
// console.log(`The factorial of ${nmb2} is ${res}`);
// }

// function factorial(x){
//     if(x ===1){
//         return 1
//     } else{
//         return x * factorial(x-1)
//     }
// }

// const nomer = 5
// if(nomer>0){
//     let res2 = factorial(nomer);
//     console.log(`The factorial of ${nomer} is ${res2}`);
// }

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const nx = 9;
if (nx > 0) {
  const res3 = factorial(nx);
  console.log(`The factorial of ${nx} is ${res3}`);
}
console.log("_______");

const greetings = () => {
  console.log("Hello World!");
  console.log("How are you?");
};

greetings();

// const myArray = [1, 2, 3];

// // From this:
// myArray.forEach(function (item) {
//   console.log(item);
// });
// item()

function myFunction(g1, g2) {
  return g1 / g2;
}
const value = myFunction(144, 12);
console.log(value);

function calcAdd(n1, n2) {
  return n1 + n2;
}
console.log(calcAdd(12, 23));

const square = function (n1) {
  return n1 * n1;
};
const x = square(11);
console.log(x);

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});
console.log(a2);

console.log("Normal way", a2);
const a3 = a.map((s) => s.length);
console.log("2-ci array", a3);

console.log(a2);
console.log(a);
const a4 = a.map(function (f) {
  return f.length;
});
console.log(a4);

const a5 = a.map(function (r) {
  return r.length;
});

console.log(a5);
const a6 = a.map((q) => q.length);

const a7 = a.map((z) => z.length);

function multiple(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiple(69));

// Define a function called calculateRectangleArea that takes two parameters: width and height.
// Inside the function, calculate the area of the rectangle using the formula: area = width * height.
// Return the calculated area.
// Test your function by calling it with different values for width and height.

// const area = function calculateRectangleArea (width, height)=> {let area = width*height;return area;}
// console.log(11;12);
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArr = arrays.reduce(
  (accumumlator, currentValue) => accumumlator.concat(currentValue),
  []
);

console.log(newArr);

let arrays2 = [[1, 2, 34], 22, 65, "elnur", true, 1960, "tests", false];

let newArr2 = arrays2.reduce(
  (accumumlator, currentValue) => accumumlator.concat(currentValue),
  []
);

console.log(newArr2);

let arrays3 = [
  1,
  5,
  7,
  90,
  [12, 43, 900],
  [false, true],
  true,
  undefined,
  null,
  NaN,
];
newArr3 = arrays3.reduce(
  (accumumlator, currentValue) => accumumlator.concat(currentValue),
  []
);

console.log(newArr3);

Arrays4 = [132, 424, 4232, [true, undefined, null]];
let newArr4 = Arrays4.reduce(
  (accumumlator, currentValue) => accumumlator.concat(currentValue),
  []
);

console.log(newArr4);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const concatenatedArray = array1.concat(array2, array3);
// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const test1 = [1, 2];
let test2 = [3, 4];
const test3 = [5, 6];
const test4 = [7, 8];
const testCnct = test1.concat(test2, test3, test4);
console.log(testCnct);

const testCnct2 = test2.concat(test1, test4, test3);
console.log(testCnct2);

test2 = [3, 4, 6];
console.log(testCnct2);

function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

// Örnek kullanım:
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

const arr = [
  12, 21, 354, 413, 5532, 6621, 7003, 8235, 9421, 1021, 3411, 572, 11029, 4224,
];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log("Tək rəqəmlər:", filterOdd(arr));

function filteredEven(arr) {
  const filteredArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      filteredArr2.push(arr[i]);
    }
  }
  return filteredArr2;
}
console.log("Cüt reqemler:", filteredEven(arr));

function filtered3n(arr) {
  const filtered3n = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      filtered3n.push(arr[i]);
    }
  }
  return filtered3n;
}

console.log("3-e bolunmur:", filtered3n(arr));

function filtered3y(arr) {
  const filtered3y = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      filtered3y.push(arr[i]);
    }
  }
  return filtered3y;
}
console.log("3-ə bölünür:", filtered3y(arr));

const arr2 = [[101, 4223], 1213, 422];

function filteredWithConcat(arr2) {
  let filteredWithConcat = [];
  for (let i = 0; i < arr2.length; i++) {
    if (Array.isArray(arr2[i])) {
      filteredWithConcat = filteredWithConcat.concat(
        arr2[i].filter((num) => num % 2 === 1)
      );
    } else if (typeof arr2[i] === "number" && arr2[i] % 2 === 1) {
      // Eğer eleman bir sayı ise ve tek ise direkt filteredArr dizisine ekle
      filteredWithConcat.push(arr2[i]);
    }
  }
  return filteredWithConcat;
}

console.log(filteredWithConcat(arr2));

function greater5(x) {
  return x > 5;
}

function filterFunction(arr, filterFn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterFn(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// Örnek kullanım
const ar = [2, 6, 8, 4, 10, 3];
const result = filterFunction(ar, greater5);
console.log(result); // Çıktı: [6, 8, 10]

const numbers = [1, 2, 3, 4, 5];

function test5(arr) {
  return arr.map((num) => num * num);
}

console.log(test5(numbers));

function test6(arrr) {
  return arrr.map((num) => num * 5);
}
console.log(test6(numbers));
console.log(numbers);
const numbers2 = [8, 23, 43, 55, 12, 11];
console.log(test5(numbers2));
console.log(test6(numbers));

function filterOdd(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

console.log(filterOdd(numbers));

function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEven(numbers));

console.log(numbers);

const numbers3 = [1, 2, 3, 4, 5];

const sum2 = numbers3.reduce((total, number) => total + number, 5);

console.log("Dizi Elemanlarının Toplamı:", sum);

// İkinci öğeden başlayarak tüm öğeleri toplamak için başlangıç değeri olarak numbers3[1] kullanılır
const sum = numbers3.reduce((total, number, index) => {
  if (index === 1) {
    // İlk öğeyi atlayarak toplam işlemine başlamak için total değeri numbers3[1] ile başlatılır
    return total + number;
  }
  // İlk öğeden sonra diğer öğeleri toplamak için total değeri kullanılır
  return total + number;
}, numbers3[1]);

console.log("Dizi Elemanlarının Toplamı:", sum);


