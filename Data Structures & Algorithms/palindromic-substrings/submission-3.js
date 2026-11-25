class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
            let count = 0;
            for(let i=0;i<s.length;i++){
                // for odd
                    let l = i;
                    let r = i;
                   while(l>=0&&r<s.length&&s[l]===s[r]){
                    // every successful check is palindrome so increae the count;
                        count+=1;
                        l--;
                        r++;
                   }
                
                     // even so we dont miss even length palindrome above.
                     l = i;
                     r = i+1;
                    while(l>=0&&r<s.length&&s[l]===s[r]){
                        count+=1;
                        l--;
                        r++;
                   }
                }
            return count   
}
}
