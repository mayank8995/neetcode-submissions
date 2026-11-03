class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        nums.sort((a,b) => a-b)
        function subSet(index, current){
            if(index === nums.length){
                result.push([...current]);
                return;
            }   
            current.push(nums[index]);
            subSet(index + 1,current);
            current.pop();

            while(index + 1 < nums.length && nums[index] === nums[index+1]){
                index++;
            }
            subSet(index + 1,current);
        }
        subSet(0,[])
        return result
    }
}
