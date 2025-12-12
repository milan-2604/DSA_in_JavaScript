/*
42. Trapping Rain Water
Solved
Hard
Topics
premium lock icon
Companies
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = [];
  let prefix = 0;
  for (let i = 0; i < height.length; i++) {
    prefix = Math.max(prefix, height[i]);
    leftMax.push(prefix);
  }
  let rightMax = new Array(height.length).fill(0);
  let suffix = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    suffix = Math.max(suffix, height[i]);
    rightMax[i] = suffix;
  }
  let min = [];
  for (let i = 0; i < height.length; i++) {
    min.push(Math.min(leftMax[i], rightMax[i]));
  }
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    const water = min[i] - height[i];
    if (water >= 0) total += water;
  }
  return total;
};
