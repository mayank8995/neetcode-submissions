class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let total = 0;
        let rl = grid.length;
        let cl = grid[0].length;
        let visited = Array.from({length: rl}, () => Array.from({length: cl}, () => false))
        let directions = [[-1,0],[1,0],[0,-1],[0,1]]
        function dfs(r,c,visited){
            if(r<0 || r >= rl || c<0 ||c>=cl || grid[r][c] === 0){
                return 1;
            }
            if(visited[r][c]) {return 0}
            visited[r][c] = true;
            for(const [rd, cd] of directions){
                let prei = dfs(r+rd, c+cd,visited);
                if(prei) total+=prei
            }
        }
        for(let r=0;r<rl;r++){
            for(let c=0;c<cl;c++){
                if(grid[r][c]){
                    dfs(r,c,visited)
                }
            }
        }
        return total;

    }
}
