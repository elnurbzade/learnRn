// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The first promise is resolves");
//     resolve(10);
//   }, 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise is rejected");
//     reject(20);
//   }, 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`This is not main`);
//     resolve(30);
//   }, 3000);
// });
// Promise.race([p2, p1, p3])
//   .then((value) => console.log(`Resolved: ${value}`))
//   .catch((reason) => console.log(`Rejected: ${reason}`));

console.log("_______________");

// const c1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`Promise 1 rejected`);
//     reject("error");
//   }, 1000);
// });

// const c2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 2 fulfilled");
//     resolved(2);
//   }, 2000);
// });

// const c = Promise.any([c1, c2]);
// c.then((value) => {
//   console.log('Returned Promise');
//   console.log(value);
// });
console.log("_______");

const r1 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise 1 rejected');
        reject('error1');
    }, 1000);
});
const r2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Promise 2 rejected');
        reject('error2');
    }, 2000);
});
const r = Promise.any([r1,r2]);
r.catch((e)=>{
    console.log('Returned Promise');
    console.log(e, e.errors);
});
