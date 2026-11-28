class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let row = Array.from({length:n}, () => 1);
        console.log("row>>>",row)
        for(let i=0;i<m-1;i++){
            let newRow = Array.from({length:n}, () => 1);
            for(let j=n-2;j>=0;j--){
                newRow[j] = row[j] + newRow[j+1]
                console.log(newRow[j], row[j], "<><><>", newRow[j+1])
            }
            row = newRow;
        }

        return row[0]
    }
}
