// const palindrome = (str)=>{
//     const reverseStr = str.split("").reverse().join("");
//     if(reverseStr===str){
//         return "isPalindrome";
//     } else{
//         return "isNotPalindrome";
//     }
// }
// console.log(palindrome("nitin"));

const palindrome = (str)=>{
    const reverseStr = str.split("").reverse().join("");
    return reverseStr===str ? "isPalindrome" : "isNotPalindrome"
}
console.log(palindrome("nitin"));