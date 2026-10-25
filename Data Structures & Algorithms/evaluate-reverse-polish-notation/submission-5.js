class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for(let tk of tokens){
                    if(tk === '+'){
                        stack.push(stack.pop() + stack.pop())
                    }else if(tk === '-'){
                        const op1 = stack.pop();
                        const op2 = stack.pop();
                        stack.push(op2-op1)
                    }
                    else if(tk === '*'){
                        stack.push(stack.pop() * stack.pop())
                    }else if(tk === '/'){
                        const op1 = stack.pop();
                        const op2 = stack.pop();
                        stack.push(Math.trunc(op2/op1))
                    }else{
                        stack.push(parseInt(tk))
                    }
        }
        return stack.pop();
    }
}
