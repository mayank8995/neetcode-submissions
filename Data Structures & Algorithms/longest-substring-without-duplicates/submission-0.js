class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let max = 0;
        let fast = 0;
        let slow = 0;
        while(fast<s.length){
                while(set.has(s[fast])){
                    set.delete(s[slow])
                    slow++;
                }
                set.add(s[fast])
                max = Math.max(max, fast-slow+1)
            fast++;
        }
        return max;
    }
}
