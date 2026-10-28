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

    isValidBST(root) {
        return this.isValid(root,-Infinity,+Infinity)
    }

    isValid(root,left,right){
        if(!root) {return true} // becase an empty BST is still a BST
        if(!(root.val > left && root.val < right)) {return false}
        return this.isValid(root.left, left, root.val) && this.isValid(root.right, root.val, right)
    }
}
