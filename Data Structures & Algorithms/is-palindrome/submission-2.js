class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s?.split("")?.map((c) => {
            let ccode = c.charCodeAt(0)
            if(ccode >= 65 && ccode <=90 || ccode >=90 && ccode <=122 || ccode >=48 && ccode <=57){
                return c;
            }
            return ""
        }).join("").toLowerCase();
        let res = str.split("").reverse().join("").toLowerCase();
        return res === str
    }
}
