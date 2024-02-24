// Homework for last lesson - 15.01.2024 //

const personalProfile = {
  firstName: "Elnur",
  lastName: "Bayramzade",
  age: 31,
  favoriteLanguage: "JavaScript",
  contactInfo: {
    email: "elnurzbade@yahoo.com",
    phoneNumber: +994777250992,
    github: "elnurbzade",
    address: "Baku",
    other: {
      linkedin: true,
      facebook: true,
      instagram: true,
      snapchat: false,
    },
  },
  occupation: "Developer",
  favNum: 6,
  isBaku: true,
  hello: function () {
    console.log("hello");
  },
};
console.log(personalProfile);

console.log(personalProfile.lastName);

console.log(personalProfile["occupation"]);

console.log(personalProfile["firstName"]);
console.log(personalProfile["contactInfo"].address);

const l1 = "a";
const l2 = "g";
const l3 = "e";

console.log(personalProfile[l1 + l2 + l3]);

console.log(personalProfile["phoneNumber"]);
console.log(personalProfile.contactInfo.phoneNumber);
console.log(personalProfile.contactInfo.other.snapchat);
console.log(personalProfile.hello);

// Homework for next lesson - 17.01.2024 //

// Adding new value to object //
let mySon = {
  name: "Omar",
  age: 5,
};

console.log(mySon);

mySon.bornCity = "Baku city";
mySon.age = 6;
console.log(mySon);

let isMySon = "Status";
let answer = "Child";

mySon[isMySon] = answer;

console.log(mySon);

// Arrays //

let favWords = ["wEBzaDev", "Novelist", "Nubar", "Omar", "JS", "ReactN"];
console.log(favWords);
console.log(favWords[1]);
console.log(favWords[3]);

favWords[2] = "writingStory";
console.log(favWords);

favWords.push("mandarin", "love", "hate");
console.log(favWords);

favWords.splice(6, 8, "poems");
console.log(favWords);

for (let i = 0; i < favWords.length; i++) {
  console.log(favWords[i]);
}

// Object destructuring

let numbers = {
  first: "birinci",
  second: "ikinci",
  third: 3,
};
const { first, second, third } = numbers;

console.log("first"), console.log("second"), console.log("third");
