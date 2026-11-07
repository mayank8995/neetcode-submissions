class Solution {
    /**
     * @param {number[][]} grid
     * @return {void}
     */
    islandsAndTreasure(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const INF = 2147483647;
        let visit = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
const addCell = (r,c) => {
    if(r<0||r>=ROWS ||c<0||c>=COLS || visit[r][c] || grid[r][c] === -1){
            return;
    }
    queue.push([r,c]);
    visit[r][c] = true;
}

        let queue = new Queue();


        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r,c]);
                    visit[r][c] = true;
                }
            }
        }

        let dist = 0;
        while(!queue.isEmpty()){
            for(let i=queue.size(); i > 0;i--){ /// size is read ONCE
            // for(let i=0;i<queue.size();i++) // as queue size is updated it will fail
                const [rw,co] = queue.pop();
                grid[rw][co] = dist;
                addCell(rw+1,co);
                addCell(rw-1,co);
                addCell(rw,co+1);
                addCell(rw,co-1);
            }
            dist++
        }

    }
}