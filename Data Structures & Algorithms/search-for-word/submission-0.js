class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rowLen = board.length;
        let colLen = board[0].length;
        const visited = Array.from({ length: rowLen }, () => 
  Array.from({ length: colLen }, () => false)
);
        for(let i=0;i<rowLen;i++){
            for(let j=0;j<colLen;j++){
                if(dfs(0,i,j,visited)){
                    return true;
                }
            }
        }
        return false;

        function dfs(index,row, col, visited){
            if(index === word.length) { return true}
            if((row < 0 || row >= rowLen )|| (col < 0 || col >= colLen) || (board[row][col] !== word[index]) || visited[row][col]) {
                    return false;
            }
            visited[row][col] = true;
            const found = dfs(index + 1,row + 1, col, visited) || dfs(index + 1,row - 1, col, visited) ||dfs(index + 1,row, col + 1, visited) || dfs(index + 1,row, col - 1, visited);
            visited[row][col] = false;

            return found;
        }
    }
}
