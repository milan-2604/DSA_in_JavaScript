//arr=[flower,flowy,floral] output should be "flo"
const prefix = (arr)=>{
    if(!arr.length) return "";
let prefix = arr[0];
for(let i=1; i<arr.length; i++){
    let j=0;
    while(j<Math.min(arr[i].length,prefix.length)){   
        if(arr[i][j]!==prefix[j]){
            break;
        }
        j++;
    }
    prefix=prefix.slice(0,j);
}
return prefix;
}
console.log(prefix(["cat","flowy","dog"]));
console.log(prefix(["flower","flow","flight"]))