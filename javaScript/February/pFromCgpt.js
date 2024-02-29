/*
Ödev 1: Filtreleme ve Haritalama:
Verilen bir dizi içindeki çift sayıları bulun, bu çift sayıları iki katına çıkarın ve sonuçları toplayın. Bunun için filter() ve map() fonksiyonlarını kullanın.
*/

let test3 = [];
numbers.forEach((num) => (test3 += num));
console.log(test3);
const testNumbers = [1, 2, 3, 4, 5, 6, 7, 34, 66, 55, 53, 31, 24, 56];
const withFilt = testNumbers.filter((number) => number % 2 === 0);
console.log(withFilt);
const withMap = withFilt.map((test) => test * 1);
console.log(withMap);

// more short version
const sumDoubleOfEvenNumbers = testNumbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2)
  .reduce((acc, val) => acc + val, 0);
console.log(sumDoubleOfEvenNumbers);

/*
Ödev 2: Üçgen Sayılar:
Verilen bir sayı aralığında (örneğin, 1 ile 100 arası) üçgen sayıları bulun. 
Üçgen sayılar, ardışık doğal sayıların toplamıdır (1, 3, 6, 10, 15, vb.). 
Bunun için bir filter() fonksiyonu kullanarak ardışık sayıları toplayın ve 
bir map() fonksiyonu ile her ardışık toplamı bulun.
*/



/*
Ödev 3: Asal Sayılar:
Verilen bir sayı aralığında (örneğin, 1 ile 100 arası) asal sayıları bulun. Asal sayılar, sadece kendisi ve 1'e bölünebilen doğal sayılardır. Bunun için bir filter() fonksiyonu kullanarak her sayının asal olup olmadığını kontrol edin.

Ödev 4: Faktöriyel Hesaplama:
Verilen bir sayının faktöriyelini hesaplayın. Faktöriyel, o sayıdan başlayarak 1'e kadar olan tüm sayıların çarpımıdır. Örneğin, 5'in faktöriyeli (5!) 5 * 4 * 3 * 2 * 1 = 120'dir. Bunun için bir reduce() fonksiyonu kullanarak çarpım işlemini gerçekleştirin.

Bu ödevler, higher order functions kullanarak çeşitli işlemleri gerçekleştirmenizi gerektirir. Bu işlemleri gerçekleştirirken dizi yöntemlerini (örneğin, filter(), map(), reduce()) ve gerekirse diğer fonksiyonları (örneğin, Math.sqrt() asal sayıları kontrol etmek için) kullanabilirsiniz. Her bir ödevi çözerken, adım adım ilerleyin ve kodunuzu düzenli bir şekilde yazmaya özen gösterin.
*/
