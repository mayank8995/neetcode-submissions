class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let time = 0;
        let fresh = 0;
        let queue = new Queue();
        let directions = [[-1,0],[1,0],[0,-1],[0,1]]

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if(grid[r][c] === 1){
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    queue.push([r,c]);
                }
            }
        }
        while(!queue.isEmpty() && fresh > 0){
            for(let i=queue.size(); i > 0;i--){ /// size is read ONCE
            // for(let i=0;i<queue.size();i++) // as queue size is updated it will fail
                const [rw,co] = queue.pop(); // popping rotten oranges
                for(let [dr,dc] of directions){
                    let row  = dr + rw;
                    let col = dc + co;
                if(row<0||row>=ROWS ||col<0||col>=COLS || grid[row][col] !== 1){
                    continue;
                }
                grid[row][col] = 2;
                queue.push([row,col]);
                fresh--;
                }
            }
            time++; // once a level is traversed increment the time
        }

        return fresh === 0 ? time : -1
        
    }
}
