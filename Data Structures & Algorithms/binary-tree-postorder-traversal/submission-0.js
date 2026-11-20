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
    postorderTraversal(root) {
         if(!root) {return []}
        let result = [];
        function traverse(root){
            if(!root) {return root}
            traverse(root.left);
            traverse(root.right)
            result.push(root.val);
        }
        traverse(root);
        return result;
    }
}
