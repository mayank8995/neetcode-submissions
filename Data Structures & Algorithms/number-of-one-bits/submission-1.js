class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        while(n){
            n = n & (n-1); // removes the rightmost 1 bit from n
            count++;
        }

        return count;
    }
}
