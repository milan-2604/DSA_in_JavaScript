/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let a = 0;
    let b = height.length-1;
    let result = 0;
    while(a!==b){
        if(height[a]<height[b]){
            if((b-a)*(height[a]) > result){
                result=(b-a)*(height[a]);
                
            }
            a++;
        }else{
            if((b-a)*(height[b])>result){
                result=(b-a)*(height[b]);
                
            }
            b--;
        }
    }
return result;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))