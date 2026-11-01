class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const minH = new MaxPriorityQueue((x) => x);
        for(const num of stones){
            minH.enqueue(num);
        }
        while(minH.size() > 1){
            let a = minH.dequeue();
            let b = minH.dequeue();
            console.log(a,"  ",b)
            if(a>b){
                minH.enqueue(a-b)
            }else{
                minH.enqueue(b-a)
            }
        }
        return minH.dequeue()
    }
}
