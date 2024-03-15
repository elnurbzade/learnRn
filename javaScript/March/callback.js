// let number = 100;

// function doItX(x, cb) {
//   setTimeout(() => {
//     number = x * 10;
//     cb(number);
//   }, 2000);
// }
// function otherDoItY(y, cb) {
//   setTimeout(() => {
//     number = y * 20;
//     cb(number);
//   }, 4000);
// }

// function otherAnyDoItZ(z, cb) {
//   setTimeout(() => {
//     number = z * 100;
//     cb(number);
//   }, 1000);
// }
// doItX(10, (newValue) => {
//   console.log(newValue);
//   otherDoItY(newValue, (value) => {
//     console.log(value);
//   });
//   otherAnyDoItZ(newValue, (value2) => {
//     console.log(value2);
//   });
// });

// const num1 = 12;
// const num2 = 13;

// function calculate(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
// }

// console.log(sum);

function getUser(userId, callback) {
  console.log("Get user from database.");
  setTimeout(() => {
    callback({
      userId: userId,
      user: "John",
    });
  }, 1000);
}
function getServices(user, callback) {
  console.log(`Get services  of ${user.username} from the API.`);
  setTimeout(() => {
    callback(["Email", "CDN", "VPN"]);
  }, 2000);
}

function getServiceCost(services, callback) {
  console.log(`Calculate  service cost of ${services}.`);
  setTimeout(() => {
    callback(services.length * 100);
  }, 3000);
}
getUser(100, (user) => {
  getServices(user, (services)=>{
    getServiceCost(services,(cost)=>{
      console.log(`The service cost is ${cost}.`);
    });
  });
});
