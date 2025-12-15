function countingSort(nums){
    //find max elment
    let max = nums[0];
   for(let c of nums) {
    if(max<c){
        max=c;
    }
   }
   let count = new Array(max+1).fill(0);
   //count frequency of each element
   for(let i =0; i<nums.length; i++){
    count[nums[i]]++;
   }
   //form prefix
   for(let i =1; i<count.length; i++){
        count[i]+=count[i-1];
   }
   let output = new Array(nums.length);
   for(let i = nums.length-1; i>=0; i--){
    output[count[nums[i]]-1]=nums[i];
    count[nums[i]]--;
   }
   return output;
}
console.log(countingSort([2,3,1,5]))