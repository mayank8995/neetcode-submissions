class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {

        let result = [];
        function cSum(candidates,start, current,target, left, result){
            if(left === 0){
                result.push([...current]);
                return;
            }
            if(start === candidates.length || left < 0) { return;}

            for(let i=start;i<candidates.length;i++){
                if( i > start && candidates[i] === candidates[i-1]) {continue};
                current.push(candidates[i])
                cSum(candidates,i+1, current,target, left-candidates[i], result);
                current.pop();
            }
        }
        cSum(candidates.sort((a,b) => a-b),0,[], target,target, result);
        return result;
    }
}
