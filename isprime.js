/*
Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself.

Example 1:
Input: N = 3
Output: Prime
Explanation: 3 is a prime number

Example 2:
Input: N = 26
Output: Non-Prime
Explanation: 26 is not prime
 */

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let num = 1;
if (isPrime(num)) {
  console.log("Prime");
} else {
  console.log("Non Prime");
}
