const binarySearch = (arr,target)=>{
    let lowest = 0;
    let highest  = arr.length-1;
    while(lowest<=highest){
        const mid = Math.floor((lowest+highest)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            lowest=mid+1;
        }else{
            highest=mid-1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9],8))