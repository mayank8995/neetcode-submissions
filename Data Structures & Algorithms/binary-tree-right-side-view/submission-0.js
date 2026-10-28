/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let queue = [root];
        let result = []
        while(queue.length){
            let level = [];
            let levelSize = queue.length;
            for(let i=0;i<levelSize;i++){
                const node = queue.shift();
                if(node !== null){
                    level.push(node.val)
                    queue.push(node.left)
                    queue.push(node.right)
                }
            }
            if(level.length > 0){
                result.push(level.slice(-1))
            }
        }
        return result;
    }
}
