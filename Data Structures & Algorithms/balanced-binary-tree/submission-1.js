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
     * @return {boolean}
     */
    isBalanced(root) {
        function isB(root){
            if(root === null) {return 0}
            const l = isB(root.left);
            const r = isB(root.right);
            if(l === -1 || r === -1) {return -1}
            const diff = Math.abs(l-r);
            if(diff > 1) return -1
            return Math.max(l,r) + 1;
        }
       return isB(root) !== -1;

    }
}
