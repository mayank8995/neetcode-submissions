class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let i=0;
        nums.sort((a,b) => a-b);
        let ans = []
          for(let i = 0 ; i<nums.length; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let sum = 0;
            let left=i+1;
            let right=nums.length-1;
            while(left < right){
                sum = nums[i] + nums[left] + nums[right];
                if(sum < 0){
                    left++;
                }else if(sum > 0){
                    right--
                }else{
                    ans.push([nums[i],nums[left],nums[right]])
                    left++;
                    while(left < right && nums[left] === nums[left-1]){
                        left++;
                    } 
                }
            }
        }
        return ans;
    }
}
