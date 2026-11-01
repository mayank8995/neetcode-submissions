class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set;
        let num = n;
        while(!set.has(num)){
            set.add(num);
            num = this.sumOfSquare(num)
            if(num === 1) {return true;}
        }
        return false;
    }

    sumOfSquare(num){
        let sum = 0;
        while(num){
                let digit = num % 10;
                sum = sum + (digit*digit);
                num = Math.floor(num / 10);
            }
        return sum;
    }
}
