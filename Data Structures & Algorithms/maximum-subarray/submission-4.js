class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length === 1) return nums[0]
        let maxSumTillNow = 0;
        let maxSum = 0
        for(let i=0;i<nums.length;i++){
            maxSumTillNow += nums[i];
            if(maxSumTillNow < 0) { maxSumTillNow = 0}
            maxSum = Math.max(maxSum, maxSumTillNow)
        }
        return maxSum === 0 ? Math.max(...nums): maxSum;
    }
}
