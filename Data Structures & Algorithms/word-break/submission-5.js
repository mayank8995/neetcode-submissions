class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let memo = {[s.length]: true}
        const dfs = (i) => {
            if(i in memo){
                return memo[i];
            }
            for(let word of wordDict){
                if(i + word.length <= s.length && s.substring(i,i+word.length) === word){
                   if(dfs(i + word.length)){
                     memo[i] = true;
                     return true;
                   }
                }
            }
            memo[i] = false;
            return false;
        }
        return dfs(0)
    }
}
