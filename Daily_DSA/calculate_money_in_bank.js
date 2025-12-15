/*
1716. Calculate Money in Leetcode Bank
Easy
Topics
premium lock icon
Companies
Hint
Hercy wants to save money for his first car. He puts money in the
 Leetcode bank every day.
He starts by putting in $1 on Monday, the first day. Every day from T
uesday to Sunday, he will put in $1 more than the day before. On every 
subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode
 bank at the end of the nth day.

Example 1:
Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

Example 2:
Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + 
(2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

Example 3:
Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + 
(2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
 
Constraints:
1 <= n <= 1000
*/
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    if(n===0) return 0;
    let total = 0;
    let currentMon = 1;
    let weekCount = 0;
    for(let i=0; i<n;i++){
       total+=currentMon+weekCount;
       weekCount++;
       if(weekCount===7){
        weekCount=0;
        currentMon++
       }
    }
    return total;
};
// console.log(totalMoney(4))
// console.log(totalMoney(10))
console.log(totalMoney(20))