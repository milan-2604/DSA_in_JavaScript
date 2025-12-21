/*
Search in Rotated Sorted Array
You are given an array of length n which was originally sorted in ascending order.
 It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:

[3,4,5,6,1,2] if it was rotated 4 times.
[1,2,3,4,5,6] if it was rotated 6 times.
Given the rotated sorted array nums and an integer target, return the index of target within
 nums, or -1 if it is not present.

You may assume all elements in the sorted rotated array nums are unique,

A solution that runs in O(n) time is trivial, can you write an algorithm that runs in O(log n) time?

Example 1:

Input: nums = [3,4,5,6,1,2], target = 1

Output: 4
Example 2:

Input: nums = [3,5,6,0,1,2], target = 4

Output: -1
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-1000 <= target <= 1000
All values of nums are unique.
nums is an ascending array that is possibly rotated.
*/
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //key is to find the sorted half and then searching the target in that sorted half
        let l = 0, r = nums.length-1;
        while(l<=r){
            const mid = Math.floor((l+r)/2);
            if(nums[mid]===target)return mid;
            //check if left is sorted
            if(nums[l]<=nums[mid]){
                if(target>=nums[l] && target<nums[mid]){
                    r=mid-1;
                }else{
                    l=mid+1;
                }
            }else{
                //if left is not sorted then surely right is sorted
                //then we check if target exist here if not it must exist on the left unsorted part
                if(target>nums[mid]&& target<=nums[r]){
                    l=mid+1;
                }else{
                    r=mid-1;
                }
            }
        }
        return -1;
    }
}