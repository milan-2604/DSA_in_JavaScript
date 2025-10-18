// 3397. Maximum Number of Distinct Elements After Operations
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array nums and an integer k.

// You are allowed to perform the following operation on each element of the array at most once:

// Add an integer in the range [-k, k] to the element.
// Return the maximum possible number of distinct elements in nums after performing the operations.

 

// Example 1:

// Input: nums = [1,2,2,3,3,4], k = 2

// Output: 6

// Explanation:

// nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.

// Example 2:

// Input: nums = [4,4,4,4], k = 1

// Output: 3

// Explanation:

// By adding -1 to nums[0] and 1 to nums[1], nums changes to [3, 5, 4, 4].

 

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109
// 0 <= k <= 109

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxDistinctElements = function(nums, k) {
//     const range = [];
//     for(let i=-k; i<=k; i++){
//         range.push(i);
//     }
//     // console.log(`range is ${range}`)
//     let set = new Set();
//     // console.log(`set is ${[...set]}`)
//     for(let i=0; i<nums.length; i++){
//         // console.log(`nums[i] is ${nums[i]}`)
//         // console.log(`current set is ${[...set]}`)
//         for(let j=0; j<range.length; j++){
//             // console.log(`ragne[j] is ${range[j]}`)
//             const element = nums[i] + range[j];
//             // console.log(`element is ${element}`)
//             if(!set.has(element)){
//                 // console.log(`${element} added to set`)
//                 set.add(element);
//                 // console.log(`set became ${[...set]}`)
//                 nums[i]=element;
//                 // console.log(`element added to array now array became ${nums}`)
//                 break;
//             }
//         }
//     }
//     return set.size
// };

// optimized solution
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);
    let lastAssigned = -Infinity;  // last assigned value
    let count = 0;

    for (let num of nums) {
        // Try to assign the smallest possible value in [num - k, num + k]
        let start = num - k;
        if (start <= lastAssigned) {
            // We must assign at least lastAssigned + 1 to keep distinctness
            start = lastAssigned + 1;
        }
        // Check if start <= num + k, if yes assign it, else can't assign distinct value
        if (start <= num + k) {
            lastAssigned = start;
            count++;
        }
        // Otherwise, no suitable distinct value could be assigned for this element
    }

    return count;
};
/*
        Explanation on the example:

Input: [1,2,2,3,3,4], k=2

Sorted: [1,2,2,3,3,4]

For 1: assign value in [ -1, 3 ] → assign -1 (lastAssigned = -1)

For 2: assign in [0, 4], must be > -1 → assign 0 (lastAssigned = 0)

For 2: assign in [0, 4], must be > 0 → assign 1 (lastAssigned = 1)

For 3: assign in [1, 5], must be > 1 → assign 2 (lastAssigned = 2)

For 3: assign in [1, 5], must be > 2 → assign 3 (lastAssigned = 3)

For 4: assign in [2, 6], must be > 3 → assign 4 (lastAssigned = 4)

Total distinct = 6.
*/


// console.log(maxDistinctElements([1,2,2,3,3,4],2))
// console.log(maxDistinctElements([4,4,4,4],1))
// console.log(maxDistinctElements([1, 2, 2, 3],0))//3
// console.log(maxDistinctElements([10, 20, 30, 40],5))//4
// console.log(maxDistinctElements([42],100))//1
// console.log(maxDistinctElements([1, 3, 5, 7],0))//4