class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        /**
         * a course  has 3 states
         * 1. visited -> crs has been added to output
         * 2. visiting -> crs not added to output, but added to cycle
         * 3. unvisited -> crs not added to output or cycle
         */
        let preMap = new Map();
        let visit = new Set();
        let cycle = new Set();
        let result = [];
        for(let [crs, pre] of prerequisites){
            if(!preMap.has(crs)) { preMap.set(crs,[])}
            preMap.get(crs).push(pre);
        }

        for(let i=0;i<numCourses;i++){
            if(!dfs(i)){
                return [];
            }
        }

        function dfs(crs){
            if(cycle.has(crs)) {return false};
            if(visit.has(crs)) {return true};
            cycle.add(crs);
            for(let pre of (preMap.get(crs) || [])){
                if(!dfs(pre)){
                    return false
                }
            }
            cycle.delete(crs);
            visit.add(crs);
            result.push(crs);
            return true;
        }

        
        return result;
    }
}
