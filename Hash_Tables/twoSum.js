const twoSum= (nums,target)=>{
    const hashTable = {};
    for(let i=0; i<nums.length; i++){
        const compliment = target-nums[i];
        if(hashTable.hasOwnProperty(compliment)){
            return [hashTable[compliment],i]
        }
        hashTable[nums[i]]=i;
    }
    return [];
}
console.log(twoSum([2,3,6,5,4],8));