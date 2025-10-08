const bubbleSort = (arr)=>{
   for(let i=0; i<arr.length-1; i++){
    let swapped = false;
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            swapped=true;
        }
    }
    if(!swapped) break;
   }
    return arr;
}
console.log(bubbleSort([3,4,7,5,6,7,3]))