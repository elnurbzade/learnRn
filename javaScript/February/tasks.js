// const phoneNumber = '+994777250992'

// const phoN = console.log(phoneNumber.slice(4,10));

// function test(){
//     if (phoN = number)
// }

function hidePhoneNumber(phoneNumber) {
 
    if (phoneNumber.length !== 13) {
        return "Wrong phone number";
    }


    const hiddenNumber = phoneNumber.substring(0, 6) + "*****" + phoneNumber.substring(11);

    return hiddenNumber;
}


const phoneNumber = "+994777250992";
const hiddenPhoneNumber = hidePhoneNumber(phoneNumber);
console.log(hiddenPhoneNumber);


const number3 = parseFloat("42 is the answer 343");
console.log(number3); // Output: 42

const num3 = parseInt("A", 16);
console.log(num3);

const num4 = parseInt('101010', 2)
console.log(num4);

const a1 = 5e20;
console.log(a1);

const a2 = 5e-1;
console.log(a2);

const a3 = 0xff;
console.log(a3);
const b = 0xd;
console.log(b);



const strNum2 = '19'-9;
console.log(strNum2);

const str = '12'/'4'
console.log(str);



const str3= '2'*'3'
console.log(str3);

const str4 = '11' - '2'
console.log(str4);

const strNum3 = '44'*2;
console.log(typeof strNum3);

const strNum4 = '14'/7
console.log(typeof strNum4);

const strNum = '4'+9;
console.log(strNum);

const numStr = 1 +'2';
console.log( typeof numStr);

const numStr2 = 6-'3'
console.log(numStr2);

const numStr3 = 7*'2';
console.log(numStr3);

const numStr4 = 9/'3';
console.log(numStr4);

const numStr5 = 5 / '0'
console.log(numStr5);

const a = 0.1 + 0.2;
console.log(a);
const a4 = 0.1 + 0.2;
console.log(a4.toFixed(1));

const a5 = 9999999999999999;
console.log(a5);

const str2 = '12'+'4';
console.log(str2);


const testStrNum = Number.MAX_SAFE_INTEGER
console.log(testStrNum);

const testStrNum2 = Number.MIN_SAFE_INTEGER
console.log(testStrNum2);