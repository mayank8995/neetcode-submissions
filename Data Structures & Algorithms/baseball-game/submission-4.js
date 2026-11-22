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
                }else if(s === 'C'){
                    const a = stack.pop()
                }else if(s ===  'D'){
                        const a = Number(stack.pop());
                        stack.push(a);
                        stack.push(2*a);
                }else{
                    stack.push(Number(s));
            }
        }
        return stack.reduce((acc,curr) => acc + curr,0)
    }
}
