//capitalizing only first letters of the sentence

//first solution
// const toCapitalize = (str)=>{
//     str = str.toLowerCase();
//     let newStr = "";
//     for(let i=0; i<str.length ; i++){
//         if(i===0){
//             newStr+=str[i].toUpperCase();
//         }
//        else if(str[i - 1] === " ") {
//             newStr += str[i].toUpperCase();}
//         else{
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

//second solution
const toCapitalize=(str)=>str.toLowerCase().split(" ").map((word)=>word[0].toUpperCase()+word.slice(1)).join(" ");

console.log(toCapitalize("heLlo world how are you this is my funciton"))