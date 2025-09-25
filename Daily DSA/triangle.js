// Given a triangle array, return the minimum path sum from top to bottom.
// For each step, you may move to an adjacent number of the row below. 
// More formally, if you are on index i on the current row, you may move to either
//  index i or index i + 1 on the next row.

// Example 1:
// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:

//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

// Example 2:
// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:
// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 
// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
 
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Copy the last row of the triangle to start with
    let dp = triangle[triangle.length - 1].slice();

    // Iterate from the second-last row to the top
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let i = 0; i < triangle[row].length; i++) {
            // Update dp[i] to be the current value plus the min of the two below it
            dp[i] = triangle[row][i] + Math.min(dp[i], dp[i + 1]);
        }
    }

    // The top element of dp now contains the minimum path sum
    return dp[0];
};
