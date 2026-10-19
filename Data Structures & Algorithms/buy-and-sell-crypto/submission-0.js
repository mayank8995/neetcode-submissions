class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let current = 0;
        let future = 1;
        let max=0;
        for(;future < prices.length; future++){
            if(prices[current] < prices[future]){
                max = Math.max(max, prices[future] - prices[current])
            }else{
                current = future;
            }
        }
        return max
    }
}
