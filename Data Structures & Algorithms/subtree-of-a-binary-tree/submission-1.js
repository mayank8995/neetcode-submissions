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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root && !subRoot) { return true};
        if(!root && subRoot) { return false};
        if(root && !subRoot) { return false};

        if(root.val === subRoot.val){
            if(this.sameTree(root,subRoot)) { return true}
        }
        const l = this.isSubtree(root.left, subRoot);
        const r = this.isSubtree(root.right, subRoot);
        return l || r; //If the match at this node fails, the answer is “found on the left OR found on the right”. Using && would wrongly demand that a copy exists on both sides.
    }

    sameTree(root1, root2){
        if(!root1 && !root2) { return true};
        if(!root1 && root2) { return false};
        if(root1 && !root2) { return false};

        if(root1.val !== root2.val) { return false}

        const l = this.sameTree(root1.left, root2.left);
        const r = this.sameTree(root1.right, root2.right);

        return l && r;
    }
}
