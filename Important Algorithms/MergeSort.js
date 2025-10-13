const MergeSort = (arr)=>{
    if(arr.length<=1) return arr;//base case

        //Divide
    const mid = Math.floor(arr.length/2);
    const left = MergeSort(arr.slice(0,mid));
    const right = MergeSort(arr.slice(mid));
        //Merge
    return merge(left,right);
}
function merge(left,right){
    const result = [];
    let i=0; let j=0;
    while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(MergeSort([2,45,3,5,6,2,]))