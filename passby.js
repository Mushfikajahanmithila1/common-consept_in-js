// Pass by value and pass by reference
// Primitives are passed by value

let num = 5;
let num2 = 6;
function changeNum(a, b) {
  a = 10;
  return a + b;
}
// console.log(num);
// console.log(changeNum(num, num2));
// console.log(num);

// Objects are passed by reference
let obj = { name: "John", age: 30 };
let obj2 = { name: "Jane", age: 25 };
function changeObj(o, v) {
  o.name = "Doe";
  v.age = 35;
}
console.log(obj, obj2);
console.log(changeObj(obj, obj2));
console.log(obj, obj2);
