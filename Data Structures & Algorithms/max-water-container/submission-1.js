class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0;
        let r=heights.length-1;
        let ans = 0;
        while(l<r){
            const h = Math.min(heights[l], heights[r]);
            const w = (r-l);
            const area = h * w;
            ans = Math.max(ans, area)
            if(heights[l] < heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return ans;
    }
}
