// Async Functions vs Sync Functions
/* What does synchronous mean?
=> Together, one after the other, sequential
- what asynchronous mean?
=> Opposite of synchronous, happens in parts, Multiple things are context switching with each other.

-

How does JS do the same? Can JS delegate things? Can JS context switch?
Yes - Using 'Asynchronous' Functions.
*/

// SetTimeOut is an asynchronous function built in javascript internally.

// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   return findSum(100);
// }

// setTimeout(findSumTill100, 1000);
// console.log("hello world");

// Can we make it synchronous?
//
