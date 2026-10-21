class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low=0;
        let high=nums.length-1;
        let min = nums[0];
        while(low<=high){
            const mid = Math.floor((high-low)/2) + low;
            if(nums[low]<=nums[mid]){
                min = Math.min(min, nums[low]);
                low=mid+1;
            }else{
                min = Math.min(min,nums[mid]);
                high = mid-1;
            }
        }
        return min
    }
}
