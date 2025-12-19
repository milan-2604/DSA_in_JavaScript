/*
Largest Rectangle In Histogram
You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

Return the area of the largest rectangle that can be formed among the bars.

Note: This chart is known as a histogram.

Example 1:

Input: heights = [7,1,7,2,2,4]

Output: 8
Example 2:

Input: heights = [1,3,7]

Output: 7
Constraints:

1 <= heights.length <= 1000.
0 <= heights[i] <= 1000
*/
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let maxArea = 0;
    let stack = []; //this stack would store [index,height] pair
    for (let i = 0; i < heights.length; i++) {
      let start = i; //just in case if we find next height smaller than current we want to shift our start point for that height
      while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
        const [index, h] = stack.pop();
        maxArea = Math.max(maxArea, (i - index) * h);
        start = index; //reset start to the index of bigger poped element
      }
      stack.push([start, heights[i]]);
    }
    // for remaining elements in the stack
    for (const [index, height] of stack) {
      maxArea = Math.max(maxArea, height * (heights.length - index)); //width would be total length minus starting point for that height
    }
    return maxArea;
  }
}
