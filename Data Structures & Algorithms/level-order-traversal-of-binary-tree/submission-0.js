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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
    const queue = [root];
    let result = [];
    while (queue.length) {
    const levelSize = queue.length; 
    let level = []; // each level array    
        for (let i = 0; i < levelSize; i++) {
    const node = queue.shift(); 
        if(node !== null){
            level.push(node.val)
            queue.push(node.left);
            queue.push(node.right);
        }
  }
    if(level.length > 0){ // one level done
        result.push(level)
    }
}
    return result
    }
}
