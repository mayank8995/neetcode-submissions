class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxF = new Map();
        let res = 0;
        let l =0;
        // here is one vague case of not updating res when count is decreasing, becuase it does not matter.
        for(let r=0;r<s.length;r++){
            maxF.set(s[r], (maxF.get(s[r]) || 0) + 1);
            while((r-l+1) - Math.max(...maxF.values()) > k){
                maxF.set(s[l], maxF.get(s[l]) - 1);
                l+=1;
            }
            res = Math.max(res,r-l+1)
        }
        return res;
    }
}
