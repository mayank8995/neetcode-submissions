 class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let low = 0;
        let high = (matrix.length * matrix[0].length) - 1;
        while(low <= high){
            const mid = Math.floor((high - low)/2) + low;
            const row = Math.floor(mid / matrix[0].length);
            const col = mid % matrix[0].length;
            console.log(mid,"  ", row, "  ", col, "  ", matrix[row][col])
            if(matrix[row][col] === target) { return true}
            else if(matrix[row][col] > target){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        return false;
    }
}
