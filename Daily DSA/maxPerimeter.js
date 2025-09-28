//this is brute force version 
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let maxPerimeter = 0;
   
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                if(!(nums[i]+nums[j])<=nums[k] || (nums[j]+nums[k])<=nums[i] || (nums[i]+nums[k])<=nums[j]){
                if((nums[i]+nums[j]+nums[k])>maxPerimeter){
                    maxPerimeter = nums[i]+nums[j]+nums[k];
                }
                }
               
            }
        }
    }
    
    return maxPerimeter;
};

//optimized
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a); // Sort descending

    for (let i = 0; i < nums.length - 2; i++) {
        let a = nums[i], b = nums[i + 1], c = nums[i + 2];
        if (b + c > a) {
            return a + b + c;
        }
    }

    return 0; // No valid triangle
};
