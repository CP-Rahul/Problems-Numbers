/*
Given three numbers. The task is to find the smallest among the given three numbers.

Examples: 

Input: first = 15, second = 16, third = 10
Output: 10

Input: first = 5, second = 3, third = 6
Output: 3
*/

let first = 15;
let second = 16;
let third = 10;

if (first < second && first < third) {
  console.log(first);
} else if (second < first && second < third) {
  console.log(second);
} else {
  console.log(third);
}
