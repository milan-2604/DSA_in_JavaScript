/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = triangle[triangle.length-1];
    for(let row=triangle.length-2; row>=0; row--){
        for(let i=0; i<triangle[row].length; i++){
            dp[i]= triangle[row][i] + Math.min(dp[i],dp[i+1]);
        }
    }
    return dp[0];
};
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))