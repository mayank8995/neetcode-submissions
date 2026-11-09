class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let directions = [[-1,0],[1,0],[0,-1],[0,1]];
        let pac = Array.from({length: ROWS}, () => Array.from({length: COLS}, () => false))
          let atl = Array.from({length: ROWS}, () => Array.from({length: COLS}, () => false))
        function dfs(r,c,ocean){
            ocean[r][c] = true;
            for(const [dr,dc] of directions){
                let nr = dr+r;
                let nc = dc+c;
                if(nr >=0 && nr < ROWS && nc >=0 && nc < COLS && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]){
                    dfs(nr,nc,ocean)
                }
            }
        }

        for(let c = 0; c < COLS; c++){
            dfs(0,c,pac);
            dfs(ROWS-1,c,atl);
        }

        for(let r = 0; r < ROWS; r++){
            dfs(r,0,pac);
            dfs(r,COLS-1,atl);
        }

        let res = [];

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r,c])
                }
            }
        }

        return res;
        
    }
}
