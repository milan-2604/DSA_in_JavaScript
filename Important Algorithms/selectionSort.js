//selection sort
const selectionSort =(arr)=>{
    for(let i=0; i<arr.length -1; i++){
        let min = i;
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!==i){
            const temp = arr[i]
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
console.log(selectionSort([29,10,14,56,23]))