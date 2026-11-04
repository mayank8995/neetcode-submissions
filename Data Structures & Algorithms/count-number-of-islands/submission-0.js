class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let numIslands = 0;
        let rowLen = grid.length;
        let colLen = grid[0].length;
        let directions = [[-1,0],[1,0],[0,1],[0,-1]]
        function dfs(r,c){
            if(r<0 || r >= rowLen || c < 0 || c>=colLen || grid[r][c] === '0'){
                return;
            }
            grid[r][c] = '0' // marking grid to visited.
            for(const [row,col] of directions){
                dfs(r+row,c+col)
            }
        }

        for(let i=0;i<rowLen;i++){
            for(let j=0;j<colLen;j++){
                if(grid[i][j] === '1'){
                    dfs(i,j)
                    numIslands++;
                }
            }
        }

        return numIslands;
    }
}
