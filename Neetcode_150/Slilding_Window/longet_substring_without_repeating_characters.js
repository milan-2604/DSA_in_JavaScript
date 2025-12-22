/*
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.
*/
class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0;
    let maxLen = 0;
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  }
}
