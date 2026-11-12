class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = []
        let parts = [];
        function isPalindrome(s,i,j){
        while(i<=j){
            if(s[i]!==s[j]) { return false}
            i++;
            j--;
        }
        return true;
    }
        function partition(index){
            if(index === s.length) {
                result.push([...parts]);
                return;
            }
            for(let j=index;j<s.length;j++){
                if(isPalindrome(s,index,j)){
                    parts.push(s.substring(index,j+1));
                    partition(j+1)
                    parts.pop()
                }
            }
        }
        partition(0)
        return result;
    }

    
}
