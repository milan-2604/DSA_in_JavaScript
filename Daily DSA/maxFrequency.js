// // // Count Elements With Maximum Frequency
// // You are given an array nums consisting of positive integers.
// // Return the total frequencies of elements in nums such that those elements all
// //  have the maximum frequency.
// // The frequency of an element is the number of occurrences of that element in the array.
// Example 1:
// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:
// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

//Solution first this is not optimised

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = {};
    for(let i=0; i<nums.length; i++){
        map[nums[i]] ? map[nums[i]]+=1 : map[nums[i]]=1;
    }
    const maxValue = Math.max(...Object.values(map));
    const arr = [];
    for(const [key,value] of Object.entries(map)){
        if(value===maxValue){
            arr.push(key);
        }
    }
    let count = 0;
    arr.forEach(num=>{
        for(let i=0; i<nums.length; i++){
            if(parseInt(num)===nums[i]){
                count++;
            }
        }
    })
    return count
};


//optimised solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = new Map();
    for(const num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    const maxValue = Math.max(...map.values());
    let count = 0;
    for(const value of map.values()){
        if(value===maxValue){
            count+=value;
        }
    }
    return count;
};