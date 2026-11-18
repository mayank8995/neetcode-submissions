class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let slow = 0;
        let fast = 0;
        let sum = 0;
        let min = 10000000001;
        while(fast < nums.length){
            sum += nums[fast]
            while(sum>= target){
                min = Math.min(min,fast-slow+1);
                sum -= nums[slow];
                slow++;
            }
            fast++;
        }

        return min === 10000000001 ? 0 : min;
    }
}
