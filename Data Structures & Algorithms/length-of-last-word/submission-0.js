class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        if(!s.length) {return 0};
        let str = s.trim("").split(" ");
        return str[str.length-1].length
    }
}
