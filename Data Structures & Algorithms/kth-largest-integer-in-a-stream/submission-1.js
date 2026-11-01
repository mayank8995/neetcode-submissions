class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        // this.nums.sort((a,b)=>b-a);
        // return this.nums[this.k-1]
        const minHeap = new MinPriorityQueue((x) => x);
        for(let i=0;i<this.nums.length;i++){
            minHeap.enqueue(this.nums[i]);
            if(minHeap.size() > this.k) {minHeap.dequeue()}
        }
        const res = minHeap.dequeue();
        console.log("res>>>",res)
        return res
        
    }


}
