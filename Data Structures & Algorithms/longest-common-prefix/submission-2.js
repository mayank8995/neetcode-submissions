class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = "";
    for(let i=0;i<strs[0].length;i++){
        for(let s of strs){
            if((i === s.length) || (s[i] !== strs[0][i])){ // if length of any string in string array is equal to index -> thata means we reached end of thta string or character dont match return the prefix as it is;
                return res;
            }
        }
            res += strs[0][i];
    }

    return res;
       
    }
}
