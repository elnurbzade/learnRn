const obj = {};

Object.defineProperty(obj, "property1", {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj);

const obj2 = {};
Object.defineProperty(obj2, "property2", {
  value: "Leon",
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(obj2);

const obj3 = {
  prop: 123,
};
Object.freeze(obj3);

Object.prop = 122;
console.log(obj3.prop);

/* Object.hasOwn ümumiyyətlə objectin daxilində hansısa property-nin olub olmadığını yoxlayır.
Hətta nul və ya undefined olsa da true qaytarır, əgər boşdusa false qaytarır. */
const example = {};
example.prop = "cost";
console.log(Object.hasOwn(example, "prop"));

/* Object.hasOwn vasitəsilə array içində hansısa index nömrəli elementin
 olub olmadığını müəyyənləşdirə bilərik */
const fruits = ["Apple", "Banana", "Orange", "Kiwi"];
console.log(Object.hasOwn(fruits, 3));

console.log(Object.is(NaN, Number.NaN));

const test2 = NaN;
const test1 = Number.NaN;
const testing = () => {
  if (isNaN(test1) && isNaN(test2)) {
    return "it is same";
  } else {
    return "not same";
  }
};
console.log(testing());
