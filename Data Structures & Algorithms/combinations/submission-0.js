class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        if(k>n) return [];
        let nums = Array.from({length:n}, (_,i) => i+1);
        console.log("nums>>",nums)
        if(k===n) {return [nums]}
        let result = [];
        function backtrack(start,current){
            if(current.length === k){
                result.push([...current]);
                return;
            }
            for(let i=start;i<nums.length;i++){
                current.push(nums[i]);
                backtrack(i+1, current);
                current.pop();
            }
        }
        backtrack(0,[]);
        return result;
    }
}
