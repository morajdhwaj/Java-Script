const x = sumOf(2, 3, 4, 6, 4, 4, 4, 5, 6, 6, 6);

function sumOf(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log(x);
