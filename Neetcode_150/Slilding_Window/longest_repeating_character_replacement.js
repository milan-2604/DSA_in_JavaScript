/*
Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:

Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:

Input: s = "AAABABB", k = 1

Output: 5
Constraints:

1 <= s.length <= 1000
0 <= k <= s.length
*/
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let count = new Map();
    let l = 0;
    let res = 0;
    let maxF = 0;
    for (let r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) || 0) + 1);
      maxF = Math.max(maxF, count.get(s[r]));
      while (r - l + 1 - maxF > k) {
        count.set(s[l], count.get(s[l]) - 1);
        l++;
      }
      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}
