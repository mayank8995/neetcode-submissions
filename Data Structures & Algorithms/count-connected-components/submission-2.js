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
        let visited = new Set()
        function dfs(graph, node, visited = new Set()) {
            if (visited.has(node)) return;
                visited.add(node);
            for (const neighbor of graph[node]) {
                    dfs(graph, neighbor, visited);
            }
        }
            for(let i=0;i<n;i++){
                 if (!visited.has(i)){
                dfs(adjacencyList,i,visited)
                numConnected+=1;
                 }

            }
            return numConnected;
    }
}
