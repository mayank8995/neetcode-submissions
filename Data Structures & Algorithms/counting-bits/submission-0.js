class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let r = n;
        let result = [];
        for(let i=0; i<=n; i++){
            let count = 0;
            let num = i;
            while(num > 0){
                num = num & (num-1);
                count++;
            }
            result.push(count)
        }
        return result;
    }
}
