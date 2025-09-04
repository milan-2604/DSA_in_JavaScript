const reverseStr = (str)=>{
    let newStr = "";
for(let i=str.length -1 ; i>=0; i--){
    newStr+= str[i];
}
return newStr; 
}
console.log(reverseStr("Milan"));

// const reverseStr = (str)=>{
//  return str.split("").reverse().join("");
// }
// console.log(reverseStr("Milan"));