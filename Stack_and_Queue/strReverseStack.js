const strReverse = (str)=>{
    const stack=[];
    let result = [];
    for(let char of str){
        stack.push(char);
    }
    while(stack.length!=0){
        result.push(stack.pop())//its better to use push rather than using +=
    }
    return result.join("");
}
console.log(strReverse("hello"))