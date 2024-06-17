function greet() {
  console.log("hello");
}
// setTimeout
/* The setTimeout() method executes a block of code after the specified time. 
The method executes the code only once. */
// syntax of setTimeout is =>
//setTimeout(function, milliseconds);
setTimeout(greet, 1 * 1000);
console.log(greet);

function helloe() {
  console.log("welcome to javascript");
}

setTimeout(helloe, 2500);
console.log(helloe);

setTimeout(function () {
  console.log("Hello World!");
}, 5000);

setInterval(greet, 1 * 10);
