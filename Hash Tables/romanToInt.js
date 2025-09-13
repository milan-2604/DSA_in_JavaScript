//myversion
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj={
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
    }
    const result=[];
   for(let i=s.length-1;i>=0;i--){
    if(obj[s[i]]>obj[s[i-1]]&& s[i-1]!==undefined){
        result.push(obj[s[i]]-obj[s[i-1]]);
        i--;
    }else{
        result.push(obj[s[i]]);
    }
   }
   return result.reduce((sum,val)=>sum+val,0);
    
};

//better solution
// var romanToInt = function(s) {
//     const obj = {
//         "I": 1,
//         "V": 5,
//         "X": 10,
//         "L": 50,
//         "C": 100,
//         "D": 500,
//         "M": 1000
//     };

//     let total = 0;
//     let prev = 0;

//     for (let i = s.length - 1; i >= 0; i--) {
//         const current = obj[s[i]];
//         if (current < prev) {
//             total -= current;
//         } else {
//             total += current;
//         }
//         prev = current;
//     }

//     return total;
// };
