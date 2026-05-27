function stopWatch() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const clock1 = stopWatch();
clock1();
clock1();
clock1();
const clock2 = stopWatch();
clock2();
clock2();
clock1();
clock2();
