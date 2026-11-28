class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let dp = {};
        function dfs(i, buying){
            if(i>=prices.length){return 0};
            if(`${i},${buying}` in dp) {
                return dp[`${i},${buying}`]
            }
            let cooldown = dfs(i+1,buying); // at every step we have other choice of cooldown
            if(buying){
                let buy = dfs(i+1, !buying) - prices[i]; // subtract coins as you have bought something
                dp[`${i},${buying}`] = Math.max(buy,cooldown);
            }else{
                let sell = dfs(i+2, !buying) + prices[i]; // add coins as you have sold something
                dp[`${i},${buying}`] = Math.max(sell,cooldown);
            }
            return dp[`${i},${buying}`];
        }
        return  dfs(0,true);
    }
}
