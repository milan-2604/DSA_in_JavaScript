/*
Encode and Decode Strings
Solved 
Design an algorithm to encode a list of strings to a single string. The encoded 
string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length<1) return "";
        let code = "";
        for(const str of strs){
            code+= str.length + "#" + str;
        }
        return code;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length<1) return [];
        const res = [];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=="#") j++;
            const length = Number(str.slice(i,j));
            res.push(str.slice(j+1,j+1+length));
            i=j+1+length;
        }
        return res;
    }
}
