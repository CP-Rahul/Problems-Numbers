/*
Given a number, check if it is Armstrong Number or Not.

Example 1:
Input:153 
Output: Yes, it is an Armstrong Number
Explanation: 1^3 + 5^3 + 3^3 = 153

Input:170 
Output: No, it is not an Armstrong Number
Explanation: 1^3 + 7^3 + 0^3 != 170
*/

function isArmstrong(num) {
    let originalNum = num;
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count += 1;
    }
    let temp = originalNum;
    let last = 0;
    let result = 0;
    while (originalNum > 0) {
        last= originalNum % 10;
        result = result + Math.pow(last, count);
        originalNum = Math.floor(originalNum / 10);
    }
    if (temp == result) {
        return true;
    } else {
        return false;
    }
}

let num = 170;
if (isArmstrong(num)) {
    console.log("Armstrong");
} else {
    console.log("Non Armstrong")
}