function sum(a, b, c, d) {
  const args = [...arguments];
  console.log(args);
  return a + b + c + d;
}

const total = sum(14, 58, 632, 12, 11, 25, 44, 78);
// console.log(total);
console.log(sum.length);
