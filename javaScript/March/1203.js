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
/* Bu kod işə salındıqda, 2 saniyədən sonra konsolda "Gecikmə tamamlandı" yazısı çap olunacaq. Bu, createDelay funksiyasından istifadə edərək yaradılmış gecikmiş hərəkəti təmsil edən 
Promise-dən necə istifadə olunacağını göstərir. */


