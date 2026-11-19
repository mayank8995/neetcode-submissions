class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        if(!nums.length) return 0;
        let count = 0;
        let currentPrefixSum = 0;
        let map = new Map();
        map.set(0,1) // because prefixSum - k  is zero then it means we got one subarray with sum k ---> so count of 0 -> 1
        /**
         * for each position, we want to count how many earlier positions have a prefix sum equal to currentPrefixSum - k
         */
        for(let i=0;i<nums.length;i++){
            currentPrefixSum += nums[i];
            if(map.get(currentPrefixSum - k)){ // this tells that if x-k is present then number of x-k will be equal to number of subarray with sum k
                count += map.get(currentPrefixSum - k)
            }
            map.set(currentPrefixSum, (map.get(currentPrefixSum) || 0) + 1)
        }
        return count;
    }
}
