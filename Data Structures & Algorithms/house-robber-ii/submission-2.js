class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length === 1) return nums[0]
        let rob1 = 0;
        let rob2 = 0;
        let max = 0;
        // exclude first first
        for(let i=1;i<nums.length;i++){
            let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        max = Math.max(max, rob2)
        rob1 = 0;
        rob2 = 0;
        // then exclude last house
        for(let i=0;i<nums.length-1;i++){
           let temp = Math.max(rob1 + nums[i], rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return Math.max(max, rob2)
    }
}

        