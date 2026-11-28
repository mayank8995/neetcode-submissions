class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dp = Array.from({length:text1.length + 1}, () => Array.from({length: text2.length + 1}, () => 0))
console.log(dp)
        for(let i=text1.length-1;i>=0;i--){
            for(let j=text2.length-1;j>=0;j--){
                if(text1[i] === text2[j]){
                    dp[i][j] = 1 + dp[i+1][j+1]; // go diagonal
                }else{
                    dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j]) // go either down or right
                }
            }
        }
        return dp[0][0];
    }
}
