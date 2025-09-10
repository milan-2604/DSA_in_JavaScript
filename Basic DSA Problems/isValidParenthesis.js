// const isValidParenthesis = (str)=>{
//     const stack = [];
//     const data ={
//     ')':"(",
//     "}":"{",
//     "]":"["
//     };
//     for(let char of str ){
//         if(char==='('|| char==="{" || char==="["){
//             stack.push(char);
//         }else{
//             if(stack.length===0 || stack.pop() !== data[char]){
//                 return false;
//             }
//         }
//     }
//     return stack.length===0;
// }


//other version when we reverse key value pairs
const isValidParenthesis = (str)=>{
    const stack = [];
    const data ={
    "(":')',
    "{":"}",
    "[":"]"
    };
    for(let char of str ){
        if(data[char]){
            stack.push(data[char]); 
        }else{
            if(stack.pop()!==char){
                return false
            }
        }
    }
    return stack.length===0;
}
console.log(isValidParenthesis("{()}[]"));