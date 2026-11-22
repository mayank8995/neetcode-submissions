class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
            for(let s of operations){
                if(s === '+'){
                    const a = Number(stack.pop());
                    const b = Number(stack.pop());
                    stack.push(b);
                    stack.push(a);
                    stack.push(a+b);
                   console.log("stack after +", stack);
                }else if(s === 'C'){
                    const a = stack.pop()
                   console.log("popping C", a);
                }else if(s ===  'D'){
                        const a = Number(stack.pop());
                        stack.push(a);
                        stack.push(2*a);
                   console.log("stack after D", stack);
                }else{
                    stack.push(Number(s));
                   console.log("stack normal", stack);
            }
        }
        console.log("stck>>",stack)
        return stack.reduce((acc,curr) => acc + curr,0)
    }
}
