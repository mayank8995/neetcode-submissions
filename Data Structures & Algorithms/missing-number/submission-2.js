class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const max = Math.max(...nums);
        const actual = nums.reduce((acc,curr) => acc+curr,0);
        const real = Array.from({length: nums.length + 1}, (_,i) => i).reduce((acc,curr) => acc+curr,0)
        return real-actual
    }
}
