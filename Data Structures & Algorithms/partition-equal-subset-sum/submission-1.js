class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
//     canPartition(nums) {
//         const sum = nums.reduce((acc, curr) => acc+curr,0);
//         if((sum%2) != 0) {return false};

//         function backtrack(i, sum){
//             if(sum === 0){
//                 return true;
//             }
//             if(sum < 0 || i >= nums.length) { return false }
//             return backtrack(i+1, sum-nums[i]) || backtrack(i+1, sum);
//         }
//         return backtrack(0,sum/2)
//     }
    canPartition(nums) {
        let sum = nums.reduce((acc, curr) => acc+curr,0);
        if((sum%2) != 0) {return false};
        console.log("DSDFSfs")
        let dp = new Set();
        dp.add(0);
        let target = sum / 2;
        for(let i=nums.length-1;i>=0;i--){
            let nextDp = new Set();
            for(let t of dp){
                if(t + nums[i] === target){
                    return true;
                }
                nextDp.add(t + nums[i]);
                nextDp.add(t);
            }
            dp = nextDp;
        }
        return false;
}
}
