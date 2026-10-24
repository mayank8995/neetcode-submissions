class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxPro = nums[0];
        let max = nums[0];
        let min = nums[0];
        for(let i = 1; i < nums.length; i++){
            const currMax = Math.max(nums[i], nums[i]*max, nums[i]*min);
            const currMin = Math.min(nums[i], nums[i]*max, nums[i]*min);
            max = currMax;
            min = currMin;
            maxPro = Math.max(maxPro, max);
        }
        return maxPro
    }
}
