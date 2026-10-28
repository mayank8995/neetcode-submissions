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
     * @return {number}
     */
    goodNodes(root) {
        if(!root) { return root};

        function gN(root,max){
            if(!root) { return root}
            let res = root.val >= max ? 1 : 0;
            max = Math.max(max, root.val)
            res+=gN(root.left,max);
            res+=gN(root.right,max);
            return res;
        }
        return gN(root,root.val);
        
    }
}
