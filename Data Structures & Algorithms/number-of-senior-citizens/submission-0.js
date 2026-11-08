class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for(let s of details){
            let ini = s.substring(0,13);
            let age = s.substring(11,13);
            if(Number(age) > 60) { count++}
        }
        return count
    }
}
