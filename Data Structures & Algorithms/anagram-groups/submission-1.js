class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    //     let map = new Map();
    //     for(let i=0;i<strs.length;i++){
    //         let str = strs[i].split('').sort().join('');
    //         if(!map.has(str)) { map.set(str, [])}
    //          map.get(str).push(strs[i])
    //     }
    // return [...map.values()]
    let res = new Map();
    for(let str of strs){
    let count = new Array(26).fill(0);
            for(let c of str){
                const mappedValue = c.charCodeAt(0) - 97; 
                count[mappedValue] += 1 
            }
            const key = count.join('#');
        if (!res.has(key)) res.set(key, []);
        res.get(key).push(str);
    }
     return [...res.values()]
    }
}
