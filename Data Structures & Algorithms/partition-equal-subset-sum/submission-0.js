class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {

        const sum = nums.reduce((acc, curr) => acc+curr,0);
        if((sum%2) != 0) {return false};

        function backtrack(i, sum){
            if(sum === 0){
                return true;
            }
            if(sum < 0 || i >= nums.length) { return false }
            return backtrack(i+1, sum-nums[i]) || backtrack(i+1, sum);
        }
        return backtrack(0,sum/2)
    }
}