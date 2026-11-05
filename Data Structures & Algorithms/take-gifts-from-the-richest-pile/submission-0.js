class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        let minP = new MaxPriorityQueue((x) => x);
        for(const gift of gifts){
            minP.enqueue(gift);
            // if(minP.size() > k){minP.dequeue()}
        }
        let sum = 0;
        for(let i=0;i<k;i++){
            minP.enqueue(Math.floor(Math.sqrt(minP.dequeue())));
        }
         while (!minP.isEmpty()) {
            const item = minP.dequeue();
            sum += item;
        }
    return sum;
    }
}
