class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(!n) return true;

       let adjacencyList = Array.from({length:n}, () => [])
       let visit = new Set();

       for(let [cur, next] of edges){
            adjacencyList[cur].push(next);
            adjacencyList[next].push(cur);
        }
       function dfs(curr, prev){
            if(visit.has(curr)) { return false}
            visit.add(curr);
            for(let n of (adjacencyList?.[curr] || [])){
                if(n === prev) {continue};
                if(!dfs(n,curr)){
                    return false;
                }
            }
            return true;
       }
        return dfs(0,-1) && visit.size === n

    }
}
