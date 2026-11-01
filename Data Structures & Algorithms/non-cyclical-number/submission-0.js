class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set;
        let sum = 0;
        let num = n;
        while(true){
            while(num){
                let digit = num % 10;
                sum = sum + (digit*digit);
                num = Math.floor(num / 10);
            }
            if(sum === 1) {return true;}
            if(set.has(sum)){
                return false;
            }
            set.add(sum);
            num = sum;
            sum = 0;
        }
        return false;
    }
}
