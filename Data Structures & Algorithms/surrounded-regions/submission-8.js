class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(grid) {
        // capture everything except the unsurrounded region
        let ROWS = grid.length;
        let COLS = grid[0].length;

        const capture = (r, c) => {
            if (
                r < 0 ||
                c < 0 ||
                r == ROWS ||
                c == COLS ||
                grid[r][c] !== 'O'
            ) {
                return;
            }
            grid[r][c] = 'T';
            capture(r + 1, c);
            capture(r - 1, c);
            capture(r, c + 1);
            capture(r, c - 1);
        };

        for(let r=0;r<ROWS;r++){
            if(grid[r][0] === 'O') {capture(r,0)}
            if(grid[r][COLS-1] === 'O') {capture(r,COLS-1)}
        }

    for(let c=0;c<COLS;c++){
        if(grid[0][c] === 'O') {capture(0,c)}
        if(grid[ROWS-1][c] === 'O') {capture(ROWS-1,c)}
    }
         for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                  if(grid[r][c] === 'O') { grid[r][c] = 'X'}
                  else if(grid[r][c] === 'T'){
                    grid[r][c] = 'O'
                  }
            }
        }
    }
}
