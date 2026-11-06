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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // TLE
        // if(!preorder.length || !inorder.length) { return null}

        // const root = new TreeNode(preorder[0]);
        // const mid = inorder.indexOf(preorder[0]);
        // root.left = this.buildTree(
        //     preorder.slice(1,mid+1),
        //     inorder.slice(0,mid)
        // );
        // root.right = this.buildTree(
        //     preorder.slice(mid+1),
        //     inorder.slice(mid+1)
        // );
        // return root

        let pre_idx = 0;
        let indices = new Map();

        inorder.map((val,id) => indices.set(val,id))

        function dfs(l,r){
            if(l>r) { return null};
            const root_val = preorder[pre_idx++];
            const root = new TreeNode(root_val);
            const mid = indices.get(root_val);
            root.left = dfs(l,mid-1);
            root.right = dfs(mid+1,r);
            return root
        }

        return dfs(0,inorder.length-1)
    }
}
