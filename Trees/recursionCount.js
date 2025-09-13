const count = (n)=>{
if(n===0){
    return;
}
console.log(n)
return count(n-1);
}
count(5)