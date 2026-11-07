class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();
        for(let n of nums) {
          if(map.has(n)) { return true;}
          else{
            map.set(n,n)
          } 
        }
        return false
    }
}
