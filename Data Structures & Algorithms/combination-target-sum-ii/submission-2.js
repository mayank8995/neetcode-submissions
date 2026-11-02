class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a-b)
        let result = [];
        function cSum(i, current, left){
            if(left === 0){
                result.push([...current]);
                return;
            }
            if(i === candidates.length || left < 0) { return;}
                // include
                current.push(candidates[i])
                cSum(i+1, current, left-candidates[i]);
                current.pop();
                // skip
                while((i+1 < candidates.length) && (candidates[i] === candidates[i+1])){ // this is like 3Sum problem
                    i++;
                }
                cSum(i+1, current, left);
        }
        cSum(0,[], target);
        return result;
    }
}
