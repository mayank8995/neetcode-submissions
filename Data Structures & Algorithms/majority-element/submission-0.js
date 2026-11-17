class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map();
        for(let num of nums){
            if(map.has(num)) {
                map.set(num, map.get(num) + 1);
            }else{
                map.set(num,1);
            }
            if(map.get(num) > Math.floor(nums.length/2)){
                return num;
            }
        }

    }
}
