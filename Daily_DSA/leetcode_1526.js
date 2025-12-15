/*1526. Minimum Number of Increments on Subarrays to Form a Target Array
Hard
Topics
premium lock icon
Companies
Hint
You are given an integer array target. You have an integer array initial of the same size as target with all elements initially zeros.

In one operation you can choose any subarray from initial and increment each value by one.

Return the minimum number of operations to form a target array from initial.

The test cases are generated so that the answer fits in a 32-bit integer.

 

Example 1:

Input: target = [1,2,3,2,1]
Output: 3
Explanation: We need at least 3 operations to form the target array from the initial array.
[0,0,0,0,0] increment 1 from index 0 to 4 (inclusive).
[1,1,1,1,1] increment 1 from index 1 to 3 (inclusive).
[1,2,2,2,1] increment 1 at index 2.
[1,2,3,2,1] target array is formed.
Example 2:

Input: target = [3,1,1,2]
Output: 4
Explanation: [0,0,0,0] -> [1,1,1,1] -> [1,1,1,2] -> [2,1,1,2] -> [3,1,1,2]
Example 3:

Input: target = [3,1,5,4,2]
Output: 7
Explanation: [0,0,0,0,0] -> [1,1,1,1,1] -> [2,1,1,1,1] -> [3,1,1,1,1] -> [3,1,2,2,2] -> [3,1,3,3,2] -> [3,1,4,4,2] -> [3,1,5,4,2].
 

Constraints:

1 <= target.length <= 105
1 <= target[i] <= 105
*/
// /**
//  * @param {number[]} target
//  * @return {number}
//  */
// var minNumberOperations = function(target) {
//     //to check if we achieved target
//     function arraysEqualEvery(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((element, index) => element === arr2[index]);
// };
// const size = target.length;
// let initial = Array(size).fill(0);
// let step =0;
// while(!arraysEqualEvery(target,initial)){
//     let n = null; let c =0;
//     for(let i=0; i<size; i++){
//         if(initial[i]<target[i]){
//             n=i;
//             c++;
//         }else{
//             if(n!==null) break;
//         }
//     }
//     for(let j=Math.abs(c-(n+1)); j<=n; j++){
//         initial[j]++
//     }
//     step++;
// }
// return step;
// };
//It was a weird approach but it worked for these small inputs lol

/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
       let ops = target[0]; // Start with the first element
    for (let i = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            ops += target[i] - target[i - 1]; // Add the increase
        }
    }
    return ops;
};

console.log(minNumberOperations([3,1,5,4,2]));
console.log(minNumberOperations([3,1,1,2]));
console.log(minNumberOperations([1,2,3,2,1]));