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

console.log(doNothing() === undefined )


console.log("______________");

function countDown(num){
    console.log(num);
    const newNum = num-1;
    if(num >0){
countDown(newNum)
    }
}

countDown(5)
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


function factorial (x){
    if (x===0){
        return 1
    }else{
return x * factorial(x-1);
    }
}

const nx = 9;
if (nx>0){
    const res3 = factorial(nx)
    console.log(`The factorial of ${nx} is ${res3}`);
}

