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
    diameterOfBinaryTree(root) {
        let d = 0;
        function getDiam(root){
            if(!root) return 0;
            const l = getDiam(root.left);
            const r = getDiam(root.right);
            d = Math.max(d,l + r);
            return Math.max(l,r) + 1
        }
         getDiam(root);
         return d
    }
}
