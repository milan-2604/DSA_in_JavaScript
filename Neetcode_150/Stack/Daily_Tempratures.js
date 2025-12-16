/*
Daily Temperatures
You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a 
future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:

Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
Example 2:

Input: temperatures = [22,21,20]

Output: [0,0,0]
Constraints:

1 <= temperatures.length <= 1000.
1 <= temperatures[i] <= 100
*/
class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    //brute force
    // const n = temperatures.length;
    // let output = new Array(n).fill(0);
    // for(let i=0; i<n; i++){
    //     let count = 1;
    //     let j=i+1;
    //     while(j<n){
    //         if(temperatures[i]<temperatures[j])break;
    //         j++;
    //         count++;
    //     }
    //     count = j===n ? 0 : count;
    //     output[i]=count;
    // }
    // return output;

    //optimized with stack
    const n = temperatures.length;
    let res = new Array(n).fill(0);
    let stack = [];
    for (let i = 0; i < n; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [stackT, stackInd] = stack.pop();
        res[stackInd] = i - stackInd;
      }
      stack.push([t, i]);
    }
    return res;
  }
}
test = new Solution();
console.log(test.dailyTemperatures([30, 38, 30, 36, 35, 40, 28]));
