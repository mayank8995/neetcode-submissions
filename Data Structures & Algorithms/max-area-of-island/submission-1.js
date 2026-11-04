class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        let max = 0;
        let area = 0;
        let rl = grid.length;
        let cl = grid[0].length;
        let directions = [[-1,0],[1,0],[0,-1],[0,1]]
        for(let r=0;r<rl;r++){
            for(let c=0;c<cl;c++){
                if(grid[r][c] === 1){
                    max = Math.max(max,  dfs(r,c))
                }
            }
        }
        function dfs(r,c){
            if(r<0||r>=rl||c<0||c>=cl||grid[r][c]==0){
                return 0;
            }
            grid[r][c] = 0;
            let res = 1
            for(let [rd,cd] of directions){
                    res += dfs(r+rd, c+cd);
            }
            return res

        }
        return max;
    }
}
