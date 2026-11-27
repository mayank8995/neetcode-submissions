class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let LIS = Array.from({length:nums.length}, () => 1) // every element lis set to 1

        for(let i=nums.length-1; i>=0; i--){
            for(let j=i+1; j < nums.length;j++){
                if(nums[i] < nums[j]){
                    LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
                }
            }
        }
        return Math.max(...LIS)
    }
}
