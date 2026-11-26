class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // bottom up dp
        let memo = {}
        const dp = (amount) => {
            if(amount === 0) {return 0};
            if(memo[amount]!==undefined) {return memo[amount]}
            let res = Number.MAX_SAFE_INTEGER;
            for(let coin of coins){
                if(amount - coin >=0 ){
                    res = Math.min(res, 1 + dp(amount - coin))
                }
            }
            memo[amount] = res;
            console.log("memo>>", memo[amount], res)
            return res
        }
        const minimum = dp(amount)
        return minimum === Number.MAX_SAFE_INTEGER ? -1 : minimum
    }
}
