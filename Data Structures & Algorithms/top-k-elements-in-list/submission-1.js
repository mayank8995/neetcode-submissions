class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let n of nums){
            map.has(n) ? map.set(n,map.get(n)+1) : map.set(n,1)
        }
        // return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map((item)=>item[0])
        // const map = {};
        // for (const num of nums) {
        //     map[num] = (map[num] || 0) + 1;
        // }
        const heap = new MinPriorityQueue((x) => x[1]);
        // for(const [n, freq] of Object.entries(map)){
        for(const [n, freq] of map){
            heap.enqueue([n,freq])
            if(heap.size() > k) heap.dequeue();
        }
         let result = [];
        for(let i=0;i<k;i++){
            const [n, _freq] = heap.dequeue();
            result.push(n);
        }
        return result;
    }
}
