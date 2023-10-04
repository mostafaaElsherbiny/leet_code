import TreeNode from "./TreeNode";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function preorderTraversal(root: TreeNode | null): number[] {
  function getList(root: TreeNode | null, list: number[] = []) {
    if (!root) return [];
    list.push(root.val);
    if (root.left) {
      getList(root.left, list);
    }
    if (root.right) {
      getList(root.right, list);
    }
    return list;
  }

  return getList(root, []);
}
