/*
560. Subarray Sum Equals K
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   //make a map to count how many times a sum has occured
   const map = new Map();
   //zero has already occured once when no element has been chosen
   map.set(0,1);
   let count = 0;
   let prefix =0;//this will keep track of current sum
   for(let num of nums){
    prefix+=num; 
    // Check if a previous prefix sum exists such that
    // current_sum - previous_sum = k
    if(map.has(prefix-k)){ 
        count+=map.get(prefix-k); // Add the number of times that prefix occurred
    }
    map.set(prefix,(map.get(prefix)||0) +1)//increase the count if this sum already existed or initiallize it in the map
   }
   return count;
};