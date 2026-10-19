class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length;
        let mid;
        while(low<=high){
            mid = Math.floor((high-low)/2) + low
            if(nums[mid] === target) { return mid}
            if(nums[mid] > target){
                high = mid - 1;
            }else{
                low = mid+1
            }
        }
        return -1;
    }
}
