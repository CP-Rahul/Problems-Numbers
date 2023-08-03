/*
Given three sides, check whether triangle is valid or not. 
Examples: 

Input :  a = 7, b = 10, c = 5 
Output : Valid

Input : a = 1 b = 10 c = 12 
Output : Invalid
*/

let a = 1;
let b = 10;
let c = 12;

if ((a + b) > c && (b + c) > a && (c + a) > b) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
