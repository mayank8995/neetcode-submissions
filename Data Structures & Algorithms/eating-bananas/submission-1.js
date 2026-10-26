class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let ans = -1;
        while(low <= high){
            const mid = Math.floor((high - low) / 2) + low;
            if(checkMid(mid,piles,h)){
                ans = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        function checkMid(k,piles,h){
            let sum = 0;
            for(let i=0;i<piles.length;i++){
                sum += Math.ceil(piles[i]/k);
            }
            if(sum <= h){
                return true
            }
            return false;
        }
        return ans;
    }

    
}
