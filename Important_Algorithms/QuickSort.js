function QuickSort (arr){
    if(arr.length<=1) return arr;

    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];
    for(let i=0; i<arr.length-1; i++){
        arr[i]<pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...QuickSort(left),pivot,...QuickSort(right)];
}
console.log(QuickSort([36,7,3,2,6,3,5]))

/*
QuickSort([36, 7, 3, 2, 6, 3, 5])
  pivot = 5
  left = [3, 2, 3]
  right = [36, 7, 6]

  ├── QuickSort([3, 2, 3])
  │     pivot = 3
  │     left = [2]
  │     right = [3]
  │
  │     ├── QuickSort([2]) → [2]
  │     └── QuickSort([3]) → [3]
  │     → [2, 3, 3]
  │
  └── QuickSort([36, 7, 6])
        pivot = 6
        left = []
        right = [36, 7]

        ├── QuickSort([]) → []
        └── QuickSort([36, 7])
              pivot = 7
              left = []
              right = [36]

              ├── QuickSort([]) → []
              └── QuickSort([36]) → [36]
              → [7, 36]

        → [6, 7, 36]

→ Final merge:
[2, 3, 3] + [5] + [6, 7, 36] = [2, 3, 3, 5, 6, 7, 36]

*/