// You are given a 0-indexed integer array nums and an integer value.

// In one operation, you can add or subtract value from any element of nums.

// For example, if nums = [1,2,3] and value = 2, you can choose to subtract value 
// from nums[0] to make nums = [-1,2,3].
// The MEX (minimum excluded) of an array is the smallest missing non-negative integer in it.

// For example, the MEX of [-1,2,3] is 0 while the MEX of [1,0,3] is 2.
// Return the maximum MEX of nums after applying the mentioned operation any number of times.

 

// Example 1:

// Input: nums = [1,-10,7,13,6,8], value = 5
// Output: 4
// Explanation: One can achieve this result by applying the following operations:
// - Add value to nums[1] twice to make nums = [1,0,7,13,6,8]
// - Subtract value from nums[2] once to make nums = [1,0,2,13,6,8]
// - Subtract value from nums[3] twice to make nums = [1,0,2,3,6,8]
// The MEX of nums is 4. It can be shown that 4 is the maximum MEX we can achieve.
// Example 2:

// Input: nums = [1,-10,7,13,6,8], value = 7
// Output: 2
// Explanation: One can achieve this result by applying the following operation:
// - subtract value from nums[2] once to make nums = [1,-10,0,13,6,8]
// The MEX of nums is 2. It can be shown that 2 is the maximum MEX we can achieve.
 

// Constraints:

// 1 <= nums.length, value <= 105
// -109 <= nums[i] <= 109

// /**
//  * @param {number[]} nums
//  * @param {number} value
//  * @return {number}
//  */
// var findSmallestInteger = function(nums, value) {
   
//     // console.log(`initial nums is ${nums}`)
//     for(let i=0; i<nums.length;i++){
//         const desired = Mex(nums);
//         console.log(`after desired nums became sorted ${nums}`)
//         // console.log(`desired is ${desired}`);
//         // console.log(`nums[i] is ${nums[i]} and value is ${value}`)
//         const quetient = Math.abs(Math.floor(nums[i]/value));
//         // console.log(`quetient is ${quetient}`);
//         const current = nums[i]>0 ? nums[i]-(quetient*value) : nums[i]+(quetient*value);
//         // console.log(`current is ${current}`)
//         if(current===desired){
//             // console.log(`current is equal to desired so: `)
//             nums[i]=current;
//             // console.log(`nums[i] is set to current now nums became ${nums}`)
//         }
//     }
//     return Mex(nums);
// };
// //helper function to find mex
// function Mex(arr){
//   const dummy= [...arr].sort((a,b)=>a-b)
//     //[-10,0,1,6,8,13]
//    let mex = 0;
//    for(let i=0; i<dummy.length; i++){
//     // console.log(`mex is ${mex}`)
//     if(dummy[i]>-1){
//        if(dummy[i]!==mex) return mex;
//        mex++;
//     }
//    }

// }
// // console.log(Mex([1,-10,0,13,6,8]))
// console.log(findSmallestInteger([1,-10,7,13,6,8],5))
// // console.log(findSmallestInteger([1,-10,7,13,6,8],7))

//correct solution
/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    const count = new Map();

    for (let num of nums) {
        const mod = ((num % value) + value) % value; // Handle negatives correctly
        count.set(mod, (count.get(mod) || 0) + 1);
    }

    let mex = 0;
    while (true) {
        const mod = mex % value;
        if (count.get(mod) > 0) {
            count.set(mod, count.get(mod) - 1);
            mex++;
        } else {
            return mex;
        }
    }
};
