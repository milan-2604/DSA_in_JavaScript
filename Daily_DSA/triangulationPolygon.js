/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
     const n = values.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    
    // l is the length of the sub-polygon
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;
            for (let k = i + 1; k < j; k++) {
                const cost = dp[i][k] + dp[k][j] + values[i] * values[k] * values[j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    return dp[0][n - 1];
};