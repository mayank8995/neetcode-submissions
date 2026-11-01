class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = Math.max(...weights);
        let high = weights.reduce((acc,curr) => acc+curr,0)
        let ans;
        while(low<=high){
            const mid = Math.floor((high-low)/2) + low;
            if(this.checkMid(mid,weights,days)){
                ans = mid
                high = mid - 1;
            }else{
                low = mid + 1
            }
        }
        return ans;
    }

    checkMid(minWeight,weights,d){
        let days = 1;
        let sum = 0;
        for(let i=0;i<weights.length;i++){
            if(sum + weights[i] > minWeight){
                days++;
                sum = weights[i]
            }else{
                sum += weights[i]
            }
        }
        if(days <= d){
            return true;
        }
        return false;
    }
}
