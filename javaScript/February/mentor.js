// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     if (str === reversedStr) {
//         return "It is palindrome";
//     } else {
//         return "It is not palindrome";
//     }
// }

// function find2Big(arr) {
//     const sortedArr = arr.sort((a, b) => b - a);
//     return sortedArr.slice(0, 2);
// }

// const numbers = [12, 23, 2, 53, 25, 87,134, 442];
// console.log(find2Big(numbers)); // [87, 53]

// function sortedWords(sentence) {
//   const words = sentence.split(" ");
//   const sortedWords = words.sort();
//   const sortedSentence = sortedWords.join(' ');
//   return sortedSentence;
// }
// const sentence = "javascript is a programming language";
// console.log(sortedWords(sentence));

// function findDuplicate(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) !== index)
// }
// console.log(findDuplicate(['ant', 'bison', 'camel', 'duck', 'bison']));

const users = [
  { username: "user1", password: "user12345" },
  { username: "user2", password: "user1234" },
  { username: "user3", password: "user123" },
];
function checkUser(username, password) {
  for (let user of users) {
    if (user.username === username && user.password === password) {
      return true;
    }
  }
  return false;
}

const inputUsername = "user2";
const inputPassword = "user123";
if (checkUser(inputUsername, inputPassword)) {
  console.log("it is ok");
} else {
  console.log("it is wrong");
}

const inputUsername2 = "user3";
const inputPassword2 = "user123";
if (checkUser(inputUsername2, inputPassword2)) {
  console.log("it is ok");
} else {
  console.log("it is wrong");
}

function truncateSentence(sentence, numWords) {
  // Split the sentence into an array of words
  const words = sentence.split(" ");

  // Ensure numWords is within the bounds of the words array
  numWords = Math.min(numWords, words.length);

  // Join the first numWords words back together
  const truncatedSentence = words.slice(0, numWords).join(" ");

  return truncatedSentence;
}

// Example usage:
const sentence = "This is a sample sentence to truncate.";
const numWords = 4;
const truncated = truncateSentence(sentence, numWords);
console.log(truncated); // Output: "This is a sample sentence"

const sentCut = (sent, str, end) => {
  return sent.slice(str, end);
};
const sent = "This is programming, not algorithma";
console.log(sentCut(sent, 0, 12));
console.log("_______________");

// function randPass (pass){

// const code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
// let psw = '';

// for let i=0; i<pass.length; i++){

//     if (pass[i] ==='1') {
//         psw +=characters.charAt(Math.floor(Math.random() * characters.length ))
//     }
// }
// return  psw
// }

// const pass = "11223324e24223993102021"
function generateRandomPassword(pattern) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "1") {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  }

  return password;
}

// Example usage:
const pattern = "111100000000000000000000"; // Example pattern
const password = generateRandomPassword(pattern);
console.log(password);

const fruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
];

let array = [1, 2.5, 3, 4.7, 5, 6.2, 7];

for (let i = 0; i < array.length; i++) {
  if (!Number.isInteger(array[i])) {
    array[i] = Math.round(array[i]);
  }
} //hər bir dəyəri yoxlayaraq yuvarlaqlaşdırır

console.log(array);

// const regExp = [/^[a-zA-Z0-9]+$/];

const checkUser2 = (user) => {
    // Verilen Username 5 herfden kicik veya 15 herfden boyukdurse ve herf ile reqemlerden ibaret deyilse ve istifadeci adi reqem ile baslayirsa false qaytarir.
   if const regax = /^[a-zA-Z0-9]+$/
 // yoxlayir ve qytarir
   return regax.test(user);
 };
 console.log(checkUser2("Nihfsbfsdfsdsdfsdfsfsfsdfsfsdfsad"))


 const reg = /^[a-zA-Z0-9]+$/
const isValid = (str) => {
    const isLenght = str.length > 5 && str.length < 15;
   // test methodunan istifade edirik
    if (isLenght && reg.test(str)) {
        return true;
    } else {
        return false;
    }
};
console.log(isValid("12Java"));