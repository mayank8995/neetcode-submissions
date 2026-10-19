class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let i=0;i<s.length;i++){
            if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
                stack.push(s[i])
            }else{
                if(stack.length > 0){
                    if(s[i] === ')' && stack[stack.length-1] !== '('){
                        return false
                    }
                    if(s[i] === '}' && stack[stack.length-1] !== '{'){
                        return false
                    }
                    if(s[i] === ']' && stack[stack.length-1] !== '['){
                        return false
                    }
                    stack.pop();
                }else{
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
