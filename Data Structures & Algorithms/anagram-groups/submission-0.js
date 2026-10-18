class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i=0;i<strs.length;i++){
            let str = strs[i].split('').sort().join('');
            if(!map.has(str)) { map.set(str, [])}
             map.get(str).push(strs[i])
        }
    return [...map.values()]
    }
}
