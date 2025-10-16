// 3350. Adjacent Increasing Subarrays Detection II
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an array nums of n integers, your task is to find the maximum value 
// of k for which there exist two adjacent subarrays of length k each, such that
//  both subarrays are strictly increasing. Specifically, check if there are two 
// subarrays of length k starting at indices a and b (a < b), where:

// Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
// The subarrays must be adjacent, meaning b = a + k.
// Return the maximum possible value of k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [2,5,7,8,9,2,3,4,3,1]

// Output: 3

// Explanation:

// The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
// The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
// These two subarrays are adjacent, and 3 is the maximum possible value of k for which 
// two such adjacent strictly increasing subarrays exist.
// Example 2:

// Input: nums = [1,2,3,4,4,4,4,5,6,7]

// Output: 2

// Explanation:

// The subarray starting at index 0 is [1, 2], which is strictly increasing.
// The subarray starting at index 2 is [3, 4], which is also strictly increasing.
// These two subarrays are adjacent, and 2 is the maximum possible value of k for 
// which two such adjacent strictly increasing subarrays exist.
 

// Constraints:

// 2 <= nums.length <= 2 * 105
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const mid = Math.floor(nums.length/2);
    let arr1= [...nums.slice(0,mid)];
    console.log(`arr1 was ${arr1}`)
    let arr2= [...nums.slice(mid,mid%2===0?nums.length-1: nums.length)];//length of both arrays should be same
    console.log(`arr2 is ${arr2}`)
    while(arr1.length!==1 && arr2.length!==1){
        let del1=returnDelete(arr1);
        let del2=returnDelete(arr2);
        if(del1===0 && del2===0){
            console.log(` mid was ${mid}`)
            console.log(`arr1 is ${arr1}`);
            console.log(`arr2 is ${arr2}`);
            return arr1.length;
        }else{
            let rem=0
            if(del1>del2){
                rem=del1;
            }else{
                rem=del2;
            }
            arr1.splice(rem,arr1.length-rem);
            console.log(`now arr1 became ${arr1}`)
            arr2.splice(rem,arr2.length-rem);
            console.log(`now arr2 became ${arr2}`)
        }
    }
    return 0;
};
//helper function
function returnDelete(arr){
 let del = 0;
 for(let i=0; i<arr.length-1; i++){
    if(arr[i+1]<arr[i]){
        del = i+1;
        break;
    }
 }
return del;
}
// console.log(returnDelete([2,3,4]))
// const arr = [2,3,4,1]
// arr.splice(3,4-3);
// console.log(arr)
// console.log(maxIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1]))
console.log(maxIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7]))

// const arr = [1,2,3,4,4,4,4,5,6]
// const mid = Math.floor(arr.length/2);
// console.log(mid)
// const arr1 = arr.slice(0,mid);
// const arr2 = arr.slice(mid,mid%2===0?arr.length-1: arr.length);
// console.log(arr1,arr2)