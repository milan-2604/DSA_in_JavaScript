/*
Binary Search
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in 
O(logn) time.

Example 1:
Input: nums = [-1,0,2,4,6,8], target = 4
Output: 3

Example 2:
Input: nums = [-1,0,2,4,6,8], target = 3
Output: -1
Constraints:
1 <= nums.length <= 10000.
-10000 < nums[i], target < 10000
All the integers in nums are unique.
*/
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //apply binary search
        let start = 0, end = nums.length-1;
        while(start<=end){
            const mid = Math.floor((start+end)/2);
            if(nums[mid]===target)return mid;
            if(nums[mid]>target){
                end=mid-1;
            }else{
                start=mid+1;
            }
        }
        return -1;
    }
}
const tes = new Solution();
console.log(tes.search([2,4,6,5],4));
console.log(tes.search([2,4,6,5],1));