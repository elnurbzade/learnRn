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
    { username: 'user1', password: 'user12345' },
    { username: 'user2', password: 'user1234' },
    { username: 'user3', password: 'user123' }
];
function checkUser(username, password) {
  
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true
        }
    }
    return false
}

const inputUsername = 'user2';
const inputPassword = 'user123';
if (checkUser(inputUsername, inputPassword)) {
    console.log('it is ok');
} else {
    console.log('it is wrong');
}

const inputUsername2 = 'user3';
const inputPassword2 = 'user123';
if (checkUser(inputUsername2, inputPassword2)) {
    console.log('it is ok');
} else {
    console.log('it is wrong');
}