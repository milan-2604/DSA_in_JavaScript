



/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    
    while(nums.length>1){
   for( let i=0; i<nums.length-1; i++){
    nums[i]=((nums[i]+nums[i+1])%10);
    
   }
   nums.pop();
//    console.log(nums.pop())
//    console.log(nums);
   
    }
    
    return nums[0];
};
console.log(triangularSum([1,2,3,4,5]));
console.log(triangularSum([5]));
// triangularSum([1,2,3,4,5])