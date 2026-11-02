class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let result = [];
        function cSum(nums,index, target, current, left, result){
            if(left === 0){
                result.push([...current])
                return;
            }
            if(index === nums.length){
                return;
            }
            if(left < 0){
                return;
            }
            current.push(nums[index])
            cSum(nums,index,target,current,left-nums[index],result);
            current.pop()
            cSum(nums,index+1,target,current,left,result);
            
        }
        cSum(nums,0,target,[],target,result)
        return result;
    }
}
