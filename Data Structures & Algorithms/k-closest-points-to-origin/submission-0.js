class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxPriorityQueue((x) => x[0]);
        for(const point of points){
            let d = Math.sqrt(Math.pow(point[0]-0,2)+Math.pow(point[1]-0,2));
            heap.enqueue([d,point]);
            if(heap.size() > k) { heap.dequeue() }
        }
        let res = [];
        for(let i=0;i<k;i++){
            const [_d, point] = heap.dequeue()
            res.push(point)
        }
    return res;
    }
}
