class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            const search = target - nums[i]
            if(map.has(search)){
                return [i,map.get(search)]
            }else{
                map.set(nums[i],i)
            }
        }
    }
}
