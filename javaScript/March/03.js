const numbers = [1, 3, 4, [67, 54]];
console.log(numbers.flat(-6));

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const arr = [[12, 33], [556, 78], [43]];
const noNest = arr.flatMap((array) => array.map((y) => y * 3));
console.log(arr);
const flattend = nestedArrays.flatMap((array) => array.map((x) => x * 2));
console.log(flattend);

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);
// Expected output: Array [1, 2, 2, 1]

/* filter() ve map() Kullanarak İşlem Yapan Bir Fonksiyon Oluşturma:
Verilen bir dizideki sayıları filtreleyerek belirli bir koşulu sağlayanları bulan ve 
bu sayıları iki katına çıkarıp yeni bir dizi oluşturan bir fonksiyon yazın. */

function filterAndMap(arr) {
  return arr
    .filter(item => typeof item === "number")
    .map(number => number * 2);
}



function mapAndFilter(arr2){
  return arr2.map(element => element *2).filter(element=>element>100);

}

const test = ["qw", 12, "qaa", "add", 45, "2rt", 6, 22];
const result2 = filterAndMap(test);
console.log(result2);

const numbers2 = [1,22,34,567,21,16,323,678,53,2]

const test2 = mapAndFilter(numbers2);
console.log(test2);

function useReduce (arr3){
  return arr3.reduce((total, current)=>total + current, 0)
}

console.log(useReduce(numbers2));

function useFilterMapReduce (arr4) {
  return arr4.filter(item => typeof item === 'number').map(number =>number*number).reduce((total, value)=>total+value,0)
}


const numbers3 = [121,'rttre',33,'12', 21]
console.log(useFilterMapReduce(numbers3));

