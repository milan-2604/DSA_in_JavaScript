/*
567. Permutation in String
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;
    s1Count = Array(26).fill(0);
    s2Count = Array(26).fill(0);
    const getIndex = (char)=> char.charCodeAt(0) - 'a'.charCodeAt(0);
    for(let char of s1){
        s1Count[getIndex(char)]++;
    }
    const size = s1.length;
    for(let i=0; i<s2.length; i++){
        s2Count[getIndex(s2[i])]++;
        if(i>=size){
            s2Count[getIndex(s2[i-size])]--;
        }
        if(i>=size-1){
            if(s1Count.toString()===s2Count.toString()) return true;
        }
    }
    return false;
};