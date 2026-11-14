class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        if(nums.length === 1) return nums[0]
        let maxSumTillNow = 0;
        let maxSum = nums[0]
        for(let i=0;i<nums.length;i++){
            if(maxSumTillNow < 0) { maxSumTillNow = 0}
            maxSumTillNow += nums[i];
            maxSum = Math.max(maxSum, maxSumTillNow)
        }
        return maxSum;
    }
}
