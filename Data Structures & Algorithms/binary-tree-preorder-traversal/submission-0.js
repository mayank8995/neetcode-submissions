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
    preorderTraversal(root) {
         if(!root) {return []}
        let result = [];
        function traverse(root){
            if(!root) {return root}
            result.push(root.val);
            traverse(root.left);
            traverse(root.right)
        }
        traverse(root);
        return result;
    }
}
