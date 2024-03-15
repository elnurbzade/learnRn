// 1 //
// createDelay adında bir funksiya yaradırıq və parametr olaraq milliseconds veririk.
//Bu parametr funksiyanın nə qədər millisaniyə gecikəcəyini göstərməlidir.
function createDelay(milliseconds) {
  // Buradaki promise bir əməliyyatı tamamlamaq və ya dəyəri qaytarmaq kimi
  //   axinxron bir əməliyyatı təmsil edir və nəticəni ya da imtinanı
  /* əks etdirən bir obyekt qaytarır */
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delay completed");
    }, milliseconds);
  });
}
// 2 //
/* Burada bir dəyişkən yaradılır və əməliyyatın nə qədər gecikməli olduğu əks etdirilir. */
const delayTime = 2000;
createDelay(delayTime).then((message) => {
  console.log(message);
});
// 2 //
createDelay(1000).then((message) => {
  console.log(message);
});
/* Bu kod işə salındıqda, 2 saniyədən sonra konsolda "Gecikmə tamamlandı" yazısı çap olunacaq. Bu, createDelay 
funksiyasından istifadə edərək yaradılmış gecikmiş hərəkəti təmsil edən 
Promise-dən necə istifadə olunacağını göstərir. */

//3//
function createDelay(message, milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, milliseconds);
  });
}

const promises = [
  createDelay("Message 1", 1000),
  createDelay("Message 2", 2000),
  createDelay("Message 3", 1500),
];
Promise.all(promises)
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
       console.error("An error occurred:", error);
  });

createDelay("First step - LeaRN JavaScript", 1000)
  .then((message) => {
    console.log(message);
    return createDelay("Second step - Learn React - ", 2000);
  })
  .then((message) => {
    console.log(message);
    return createDelay("Third step - Learn ReactNative", 3000);
  })
  .then((message) => {
    console.log(message);
  });

// 4 //
function createNotes(note, milliseconds) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error("Error: It is wrong"));
    } else {
      setTimeout(() => {
        resolve(note);
      }, milliseconds);
    }
  });
}
createNotes("My life, my codes", 500)
  .then((note) => {
    console.log(note);
    return createNotes("IT is not ok with AI", 300);
  })
  .then((note) => {
    console.log(note);
    return createNotes("Last change", 1000);
  })
  .then((note) => {
    console.log(note);
  })
  .catch((error) => {
    console.error(error.message);
  });

  