class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits.length) return []
        let map = new Map();
        map.set('2', 'abc');
        map.set('3', 'def');
        map.set('4', 'ghi');
        map.set('5', 'jkl');
        map.set('6', 'mno');
        map.set('7', 'pqrs');
        map.set('8', 'tuv');
        map.set('9', 'wxyz');
        let result = [];
        function backtrack(index, current){
                if(index === digits.length) {
                    result.push(current.join(""))
                    return;
                }
            for(let ch of map.get(digits[index])){
                    current.push(ch)
                    backtrack(index+1,current);
                    current.pop();
            }
        }
        backtrack(0,[]);
        return result;
    }
}
