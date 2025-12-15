const twoSum = (arr,target)=>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                return [i,j];
            }
        }
    }  
        return "target not found!"
}

console.log(twoSum([2,4,6,4,7,4,9],15));