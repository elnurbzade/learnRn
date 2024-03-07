const animals = ["ant", "bison", "camel", "duck", "elephant"];
const sliced = animals.slice(0, 3);
const spliced = animals.splice(0, 1);

console.log(sliced);
console.log(spliced);
console.log(animals);

// function getUserInput() {
//   return new Promise((resolve, reject) => {
//     const userInput = console.log("Please add number");
//     const number = parseInt(userInput);
//     if (!isNaN(number)) {
//       resolve (number);
//     } else {
//       reject (new Error("Wrong!"))
//     }
//   })
// }

// function multiplyByFive() {
//   getUserInput().then((number)=> {
//     const result = number * 5;
//     console.log(`Multiple 5: ${result}`);
//   })
//   .catch((error) => {
//     console.error(error.message);
//     multiplyByFive();
//   });
// }