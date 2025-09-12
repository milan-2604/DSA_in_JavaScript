const duplicates  = (nums)=>{
    const result = new Set();
    const obj = {};
    for(let i of nums){
        if(obj[i]){
            result.add(i);
        }
        obj[i] ? obj[i]+=1 : obj[i]=1;
    } 
    return [...result];
}
console.log(duplicates([2,3,3,2,,2,4,2,5,6,4,5,6]))