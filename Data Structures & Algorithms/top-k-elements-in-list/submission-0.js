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
        return [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map((item)=>item[0])
    }
}
