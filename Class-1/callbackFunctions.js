// functions can take other functions as input and this will confuse you (callbacks)
function sum(num1, num2, fnToCall) {
  // fnToCall - A function goes as an Argument to a Function.
  let result = num1 + num2;
  fnToCall(result);
  // return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

const ans = sum(1, 2, displayResult);

// You are only allowed to call one function after this
// How will you displayResult of a sum
