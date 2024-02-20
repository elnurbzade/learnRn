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
console.log(hiddenPhoneNumber); // Çıktı: "+99477*****92"

