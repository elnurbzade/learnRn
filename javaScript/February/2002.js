const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

// Task 1

const withMatch = text.match(/Spain/g);
console.log(withMatch);

// Task 2

const withMatchAll2 = [...text.matchAll(/rain/g)];
console.log(withMatchAll2);

// Task 3

const replaceSpain = text.replace("Spain", "France");
console.log(replaceSpain);

// Task 4

const replaceAllRain = text.replaceAll("rain", "sun");
console.log(replaceAllRain);

// Task 5

const searchTest = text.search(/plain\b/g);
console.log(searchTest);

// Validation Functions

// const regexPhone = /^\+\d{8,15}$/;
// const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// const regexName = /^[a-zA-Z\s]+$/;
// const regexAzePhone = /^\+994(?:77|50|51|55|70|99)\d{6}(\d{2})$/;

// Name
const nameReg = (myName)=>{
    const regexName = /^[a-zA-Z\s]+$/;
    if(!regexName.test(myName)){
        return "Your name is available"
    } else {
        return "You are not in list"
    }}

    // Password
const showPass = (password)=> {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if (!regexPassword.test(password)){

    return 'This is not for password'
}else{
    return "It is for you"

}}

const testPassword = 'wpwFV1344'
const testingPassword = showPass(testPassword)
const testPassword2 = '24222525'
const testingPassword2 = showPass(testPassword2)
console.log(testingPassword);
console.log(testingPassword2);
//Email
function showEmail(email){
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)){
        return 'Wrong email!'
    } else {
        return "Message sent!"
    }}

    const testEmail = 'elnurbzade@yahoo.com'
    const testingEmail = showEmail(testEmail);
    const testEmail2 = 'life is fucking going on'
    const testingEmail2 = showEmail(testEmail2)
    console.log(testingEmail);
    console.log(testingEmail2);

    // AzePhone


function hideAzePhone(azePhone) {
    const regexAzePhone = /^\+994(?:77|50|51|55|70|99)(\d{3})\d{3}(\d{2})$/;
  
    if (!regexAzePhone.test(azePhone) && azePhone.length !== 13) {
      return "Wrong number";
    } else {
      const hiddenAzePhone = azePhone.replace(/(\d{5})(?=\d{2}$)/, '*****');
      return hiddenAzePhone;
    }
  }
  
  const myPhone = "+994777250992";
  const myPhone2 = '+994557250992'
  const phone = '+911234532444'
  const hidingAzePhone = hideAzePhone(myPhone);
  const hidingAzePhone2 = hideAzePhone(myPhone2)
  const hidingAzePhone3 = hideAzePhone(phone)
  console.log(hidingAzePhone);
  console.log(hidingAzePhone2)
console.log(hidingAzePhone3);
  

// Additional tasks:

const withMatchAll = [...text.matchAll(/Spain/g)];
console.log(withMatchAll);

const withMatch2 = text.match(/rain/g);
console.log(withMatch2);

const test2Replace = text.replaceAll("rain", "warm");
console.log(test2Replace);

const test3Replace = text.replace("April", ["May", " June"]);
console.log(test3Replace);


// function hideAzePhone(azePhone) {
//     const regexAzePhone = /^\+994(?:77|50|51|55|70|99)\d{6}(\d{2})$/;
  
//     if (!regexAzePhone.test(azePhone) && azePhone.length !== 13) {
//       return "Wrong number";
//     } else {
//       const hiddenAzePhone = azePhone.replace(/(?<=^\+994\d{2})\d(?=\d{3}$)/g, '*');
//       return hiddenAzePhone;
//     }
//   }
  
//   const testAzePhone = "+994777250992";
//   const hidingAzePhone = hideAzePhone(testAzePhone);
//   console.log(hidingAzePhone);
   
// function hideAzePhone(azePhone) {
//   const regexAzePhone = /^\+994(?:77|50|51|55|70|99)\d{6}(\d{2})$/;

//   if (!regexAzePhone.test(azePhone)&& azePhone.length !== 13) {
//     return "Wrong number";
//   } else {
//     const hiddenAzePhone = azePhone.replace(/(?<=^\+994\d{2})\d(?=\d{3}$)/g, '*');

//     return hiddenAzePhone;
//   }
// }
// const testAzePhone = "+994777250992";
// const hidingAzePhone = hideAzePhone(testAzePhone);
// console.log(hidingAzePhone);