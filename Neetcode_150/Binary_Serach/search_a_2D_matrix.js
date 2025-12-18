/*
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true
*/
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let startArr = 0, endArr = matrix.length-1;
        while(startArr<=endArr){
        const midArr = Math.floor((startArr+endArr)/2);
        const currentRow = matrix[midArr];
        //check if first element of this row is greater than target
        if(currentRow[0]>target){
            endArr = midArr-1;
        }
        else if(currentRow[currentRow.length-1]<target){
            startArr = midArr+1;
        }
        else{
            let s = 0, e = currentRow.length-1;
            while(s<=e){
                const mid = Math.floor((s+e)/2);
                if(currentRow[mid]===target)return true;
                if(currentRow[mid]<target){
                    s=mid+1;
                }
                else{
                    e=mid-1;
                }
            }
            return false;
        }
    }
    return false;
    }
}