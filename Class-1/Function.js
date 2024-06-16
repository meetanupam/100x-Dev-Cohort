// write a function that finds the sum of two numbers
// function sum(a, b) {
//   return a + b;
// }

function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

const value = sum(1, 2);
const value1 = sum(5, 5);
console.log(value); // 3
console.log(value1); // 10

// ans = sum(1, 2);
// console.log(ans);

// Function Callbacks - a function is going to call inside another function

// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// const ans = sum(1, 2, displayResult);
