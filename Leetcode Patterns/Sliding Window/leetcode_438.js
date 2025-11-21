/*
438. Find All Anagrams in a String
Medium
Topics
premium lock icon
Companies
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.
*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if(s.length<p.length) return result;
    let pCount = Array(26).fill(0);
    let sCount = Array(26).fill(0);
    const getIndex = (char)=> char.charCodeAt(0) - 'a'.charCodeAt(0);
    for(let char of p){
        pCount[getIndex(char)]++;
    }
    const windowSize = p.length;
    for(let i=0; i<s.length; i++){
        sCount[getIndex(s[i])]++;
        if(i>=windowSize){
            sCount[getIndex(s[i-windowSize])]--;
        }
        if(i>=windowSize-1){
            if(sCount.toString()===pCount.toString()){
                result.push(i-windowSize+1);
            }
        }
    }
    return result;
};