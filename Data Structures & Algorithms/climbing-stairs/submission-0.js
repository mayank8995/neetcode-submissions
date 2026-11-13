class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
       //same way as fibbonacci
       let a = 1;
       let b = 1;
       for(let i=1;i<n;i++){
            let temp = a;
            a = a + b;
            b=temp;
       }
       return a;
    }
}
