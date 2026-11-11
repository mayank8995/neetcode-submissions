class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    constructor(n){
        this.parent = Array.from({length:n+1}, (_,i) => i);
        this.rank = Array.from({length:n+1}, () => 0);
    }

    find(u){
        if(this.parent[u] !== u){
            this.parent[u] = this.find(this.parent[u])
        }
        return this.parent[u]
    }

    union(a,b){
        const rootA = this.find(a);
        const rootB = this.find(b);
        if(rootA === rootB) {return false};

        if(this.rank[rootB] > this.rank[rootA]){
            this.parent[rootA] = rootB;
        }else if(this.rank[rootA] > this.rank[rootB]){
            this.parent[rootB] = rootA
        }else{
            this.parent[rootB] = rootA
            this.rank[rootA]++;
        }
        return true;
    }


    findRedundantConnection(edges) {
        const dsu = new Solution(edges.length)
       for(let [u,v] of edges){
            if(!dsu.union(u,v)){
                return [u,v]
            }
       }
    }
}
