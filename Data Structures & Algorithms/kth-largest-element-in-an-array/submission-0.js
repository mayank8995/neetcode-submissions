class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MaxPriorityQueue((x) => x);
        for(const num of nums){
            heap.enqueue(num);
            // if(heap.size() > k){
            //     heap.dequeue();
            // }
        }
        let result = [];
        for(let i=0;i<k;i++){
            result.push(heap.dequeue())
        }
        return result[result.length-1]
    }
}
