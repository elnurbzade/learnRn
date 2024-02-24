const obj = {};

Object.defineProperty(obj, 'property1', {
  value: 42,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj);

const obj2 = {};
Object.defineProperty(obj2, 'property2',{
    value: 'Leon',
    writable:false,
    enumerable:true,
    configurable: false
})
console.log(obj2);

const obj3 ={
    prop: 123,
};
Object.freeze(obj3)

Object.prop = 122;
console.log(obj3.prop);


