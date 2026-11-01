class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinPriorityQueue((x) => x);
        for(const num of nums){
            heap.enqueue(num);
            if(heap.size() > k) { heap.dequeue()}
        }
        
        return heap.dequeue()
    }
}
