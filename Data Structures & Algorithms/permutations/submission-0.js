class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {

        let result = [];
        function permutation(current,visited){
            if(current.length===nums.length){
                result.push([...current]);
                return;
            }
            for(let i=0;i<nums.length;i++){
                if(visited[i]) {continue;}
                current.push(nums[i])
                visited[i] = true;
                permutation(current,visited)
                current.pop()
                visited[i] = false;
            }
        }
        permutation([],new Array(nums.length).fill(false));

        return result
    }
}
