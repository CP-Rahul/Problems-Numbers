/*
Given a range of numbers, find all the palindrome numbers in the range.

Example 1:
Input: min = 10 , max = 50
Output: 11 22 33 44 
Explanation: 11, 22, 33, 44 will remain the same when they read from forward or backward.

Example2:
Input: min = 100 , max = 150
Output: 101 111 121 131 141 
Explanation: 11, 22, 33, 44 will remain the same when they read from forward or backward.
*/

function isPalindrome(num) {
  let rev = 0;
  let temp = num;
  let last;
  while (num > 0) {
    last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  if (rev == temp) {
    return true;
  } else {
    return false;
  }
}

let min = 100;
let max = 150;
for (let i = min; i <= max; i++) {
  if (isPalindrome(i)) {
    console.log(i);
  }
}
