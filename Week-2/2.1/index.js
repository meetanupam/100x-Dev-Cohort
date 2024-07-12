function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

// generic function that doesn't care of function, but 'something'
// you can run any built function with the value in this particular function itself.
function sumOfSomething(a, b, fn) {
  let some1 = fn(a);
  let some2 = fn(b);
  return some1 + some2;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

function sumOfCubes(a, b) {
  let cube1 = cube(a);
  let cube2 = cube(b);
  return cube1 + cube2;
}

let ans = sumOfSomething(1, 2, cube);
console.log(ans);

// let ans = sumOfSquares(1, 2);
// console.log(ans);

// let ans2 = sumOfCubes(1, 2); // will give the cube 9, because for 1 cube, we will get '1' and for 2
// // we will get 2 x 2 x 2 = 8, 8 + 1 = 9
// console.log(ans2);
