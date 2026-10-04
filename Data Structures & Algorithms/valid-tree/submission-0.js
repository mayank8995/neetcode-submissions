class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(!n) return true;
        const adjacencyList = Array.from({ length: n }, () => []);
        for(const [u,v] of edges){
            adjacencyList[u].push(v);
            adjacencyList[v].push(u);
        }
        let visit = new Set();
        function dfs(node,prevNode){
            if(visit.has(node)) {return false};
                visit.add(node);
            for(const j of adjacencyList[node]){
                if(j === prevNode) {continue};
                if(!dfs(j,node)) {return false}
            }
            return true
        }
        return dfs(0,-1) && n === visit.size
    }
}
