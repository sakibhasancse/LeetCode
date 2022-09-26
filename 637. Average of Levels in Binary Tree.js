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
 * @return {number[]}
 */

const average = (node, index, sum, count) => {
    if (node === null) return;
    if (index < sum.length) {
        sum[index] = sum[index] + node.val;
        count[index] += 1;
    } else {
        sum.push(1 * node.val);
        count.push(1);
    }
    average(node.left, index + 1, sum, count);
    average(node.right, index + 1, sum, count);
};

var averageOfLevels = function (root) {
    const count = [];
    const result = [];

    average(root, 0, result, count);
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        result[i] = element / count[i];
    }

    return result;
};
