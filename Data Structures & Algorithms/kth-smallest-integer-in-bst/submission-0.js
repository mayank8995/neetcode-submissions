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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root) return root
        let result = [];

        function inorder(root){
            if(!root) {return root}
            inorder(root.left);
            result.push(root.val);
            inorder(root.right);
        }
        inorder(root);

        return result[k-1]
    }
}
