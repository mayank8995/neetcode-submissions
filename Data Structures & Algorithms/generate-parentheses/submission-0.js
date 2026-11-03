class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];
        let stack = [];
        function backtrack(open,closed){
            if(open === n && closed === n){
                let str = stack.join("")
                 res.push(str);
                 return str;
            }
            if(open < n){
                stack.push('(');
                backtrack(open+1, closed);
                stack.pop();
            }
            if(closed < open){
                stack.push(')');
                backtrack(open, closed+1);
                stack.pop();
            }
        }

        backtrack(0,0);
        return res;
    }
}
