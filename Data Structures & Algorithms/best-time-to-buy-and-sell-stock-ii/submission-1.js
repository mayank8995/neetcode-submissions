class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i=0;
        let j=1;
        let max = 0;
        let profit = 0;
        while(j<prices.length){
            if(prices[i] < prices[j]){
                profit+= prices[j]-prices[i];
            }
            i=j;
            j++;
            max = Math.max(max, profit)
        }

        return profit;
    }
}
