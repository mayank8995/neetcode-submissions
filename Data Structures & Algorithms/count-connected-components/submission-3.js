class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let numConnected = 0;
       let adjacencyList = Array.from({length: n}, () => [])
            for(const [u,v] of edges){
                adjacencyList[u].push(v);
                adjacencyList[v].push(u);
            }
        let visit = new Set();

        function dfs(n,visit=new Set()){
            if(visit.has(n)) { return false};
            visit.add(n)
            for(let nd of adjacencyList[n]){
                dfs(nd,visit)
            }
        }

        for(let i=0;i<n;i++){
            if(!visit.has(i)){
                 dfs(i,visit);
                 numConnected+=1;
            }
        }
        return numConnected;
    }
}
