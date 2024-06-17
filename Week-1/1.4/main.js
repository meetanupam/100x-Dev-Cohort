// 1. Loops
// 2. Functions

// 3. Callback Functions

// Can you call one function inside another function - "YES"

// find the square of the input

function square(n) {
  return n * n;
}

// find the sum of the squares of the input

// function sumOfSquares(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);

//   return val1 + val2;
// }

// console.log(sumOfSquares(1, 3));

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}

const ans = sumOfSomething(2, 2, square);
console.log(ans);
