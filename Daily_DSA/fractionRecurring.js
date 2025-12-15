// Given two integers representing the numerator and denominator of a fraction,
//  return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.
// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"

// Example 2:
// Input: numerator = 2, denominator = 1
// Output: "2"

// Example 3:
// Input: numerator = 4, denominator = 333
// Output: "0.(012)"

// Constraints:
// -231 <= numerator, denominator <= 231 - 1
// denominator != 0

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator===0) return "0";
    let result = "";
    if((numerator<0) !== (denominator<0)){
        result+="-";
    }
  let num = Math.abs(numerator);
  let den = Math.abs(denominator);

  const integer = Math.floor(num/den);
  result+=integer;
  let remainder = num%den;
  if(remainder===0) return result;
  result+=".";
    const map = new Map();
    let decimalDigit = "";
    while(remainder!==0){
        if(map.has(remainder)){
            const remainderIndex = map.get(remainder);
            decimalDigit = decimalDigit.slice(0,remainderIndex) + "(" + decimalDigit.slice(remainderIndex) +")";
            break;
        }
        map.set(remainder,decimalDigit.length);
        remainder*=10;
        const quotient = Math.floor(remainder/den);
        decimalDigit+=quotient;
        remainder%=den;
    }
  result+=decimalDigit;
    return result;
};
console.log(fractionToDecimal(1,7))

