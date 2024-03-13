let promise = new Promise(function (resolve, reject) {
  resolve(3);

  setTimeout(() => resolve(2), 10000);
});

promise.then(console.log("10"));

console.log("_______________________");

// https://www.javascripttutorial.net/es6/promise-chaining/

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result / 15;
  })
  .then((result) => {
    console.log(result);
    return result * 100;
  })
  .then((result) => {
    console.log(result);
    return result - 300;
  })
  .then((result) => {
    console.log("Last answer is:" + result);
  });

console.log("_____________");

// let p2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(10);
//   }, 1000);
// });

// p2.then ((result2)=>{
//   console.log(result2);
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(result2*2);
//     },3*1000);
//   });
// }).then((result2)=>{
//   console.log(result2);
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//     resolve(result2*4);
//     }, 2*1000 );
//   });
// }).then((result2)=>{
//   console.log(result2);
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(result2/10);
//   },500);
// });
// }).then((result2)=>{
//   console.log(result2);
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(result2+12);
//   }, 1000);
// });
// }).then((result2)=>{
//   console.log(result2);
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(result2*5);
//     }, 200);
//   });
// }).then((result2)=>
// {
// console.log(result2)
// return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(result2 *10);
//   }, 1000);
// });
// }).then((result2)=>console.log(result2))

// const promis = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Veri alındı!");
//   }, 10000);
// });

// promis.then((data) => {
//   console.log(data);
// });


// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       resolve(10);
//   }, 3 * 100);
// });

let p3=()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(10)
    }, 1000);
  });
}

p3().then((result)=>console.log(result))
;
