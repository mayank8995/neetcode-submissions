class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // build a graph using by making adjaceny list
        let preMap = new Map();
        let visit = new Set();

        for(let i=0;i<numCourses;i++){
            preMap.set(i,[])
        }

        for(let [crs, pre] of prerequisites){
            preMap.get(crs).push(pre)
        }

        function dfs(crs){
            if(visit.has(crs)) { return false}
            if(preMap.get(crs).length === 0) {
                return true;
            }
            visit.add(crs);
            for(let pre of preMap.get(crs)){
                if(!dfs(pre)){
                    return false;
                }
            }
            visit.delete(crs);
            preMap.set(crs,[])
            return true;

        }

        for(let c=0;c<numCourses;c++){
            if(!dfs(c)){
                return false
            }
        }

        return true;
    }
}
