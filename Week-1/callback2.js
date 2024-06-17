function calculateArithmetic(a, b, arithemeticFinalFunction) {
  //   if (type == "sum") {
  //     const val = sum(a, b);
  //     return val;
  //   }

  //   if (type == "minus") {
  //     const val = minus(a, b);
  //     return val;
  //   }

  const ans = arithemeticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);
