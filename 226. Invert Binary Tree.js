/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function invertTree(root) {
    if(!root) {
        return null;
    }

    const nodesToTraverse = [root];

    while(nodesToTraverse.length) {
        const node = nodesToTraverse.pop();

        const temp = node?.left;
        node.left = node.right;
        node.right = temp;

        if(node.left) {
            nodesToTraverse.push(node.left);
        }

        if(node.right) {
            nodesToTraverse.push(node.right);
        }
    }

    return root;
}