class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];
        function fSubset(nums, index, current, result){
            if(index === nums.length){
                result.push([...current])
            }else{
            current.push(nums[index]);
                fSubset(nums, index + 1, current, result);
                current.pop();
                fSubset(nums, index + 1, current, result);
            }
        }
        fSubset(nums,0,[], result);
        return result;
    }
}
