class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        if(k>n) return [];
        let result = [];
        function backtrack(start,current){
            if(current.length === k){
                result.push([...current]);
                return;
            }
            for(let i=start;i<=n;i++){
                current.push(i);
                backtrack(i+1, current);
                current.pop();
            }
        }
        backtrack(1,[]);
        return result;
    }
}
