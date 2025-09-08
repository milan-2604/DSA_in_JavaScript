// const numReversal = (num)=>{
//     num= num.toString();
//     let reverse = "";
//     for(let i=num.length -1 ; i>=0; i--){
//         reverse+= num[i];
//     }
//     return Number(reverse);
// }

// console.log(numReversal(1234455667));

// const numberReversal = (num)=>{
//     num = num.toString();
//     return Number(num.split("").reverse().join(""));
// }
// console.log(numberReversal(12345678))

const numberReversal = (num)=>parseInt(num.toString().split("").reverse().join(""))*Math.sign(num);
console.log(numberReversal(-12345678));