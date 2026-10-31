class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productTillNow = 1;
        let result = [];
        for(let i=0;i<nums.length;i++){
            result[i] = productTillNow;
            productTillNow *= nums[i]
        }
        productTillNow = 1;
        for(let i=nums.length-1;i>=0;i--){
            result[i] *= productTillNow;
            productTillNow *= nums[i]
        }

        return result
    }
}
