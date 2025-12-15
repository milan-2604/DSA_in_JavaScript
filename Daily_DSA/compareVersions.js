// Given two version strings, version1 and version2, compare them. 
// A version string consists of revisions separated by dots '.'. 
// The value of the revision is its integer conversion ignoring leading zeros.
// To compare version strings, compare their revision values in left-to-right order. 
// If one of the version strings has fewer revisions, treat the missing revision values as 0.
// Return the following:
// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

// Example 1:
// Input: version1 = "1.2", version2 = "1.10"
// Output: -1
// Explanation:
// version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.

// Example 2:
// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation:
// Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 3:
// Input: version1 = "1.0", version2 = "1.0.0.0"
// Output: 0
// Explanation:
// version1 has less revisions, which means every missing revision are treated as "0".

// Constraints:
// 1 <= version1.length, version2.length <= 500
// version1 and version2 only contain digits and '.'.
// version1 and version2 are valid version numbers.
// All the given revisions in version1 and version2 can be stored in a 32-bit integer.

/**
 * @param {string} version1
//  * @param {string} version2
//  * @return {number}
//  */
var compareVersion = function(version1, version2) {
  const arr1 = version1.split(".").map(num=>parseInt(num));
  const arr2 = version2.split(".").map(num=>parseInt(num));
  if(arr1.length>arr2.length){
    while(arr1.length>arr2.length){
        arr2.push(0)
    }
  }else if(arr2.length>arr1.length){
    while(arr2.length>arr1.length){
        arr1.push(0)
    }
  }

  for(let i=0; i<arr1.length; i++){
    if(arr1[i]>arr2[i]){
        return 1
    }else if(arr2[i]>arr1[i]){
        return -1
    }
  }
return 0;
};
console.log(compareVersion("1.2","1.10"));
console.log(compareVersion("1.01","1.001"));
console.log(compareVersion("1.0","1.0.0.0"));


//more optimized version

var compareVersion = function(version1, version2) {
  const arr1 = version1.split('.').map(Number);
  const arr2 = version2.split('.').map(Number);

  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const v1 = arr1[i] || 0;
    const v2 = arr2[i] || 0;

    if (v1 > v2) return 1;
    if (v1 < v2) return -1;
  }

  return 0;
};



