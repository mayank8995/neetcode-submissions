class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let res = 0;
        for(const num of nums){
            if(!numSet.has(num-1)){
                let length = 1;
                while(numSet.has(num+length)){
                    length++;
                }
                res = Math.max(res,length);
            }
        }
        return res;
    }
}
