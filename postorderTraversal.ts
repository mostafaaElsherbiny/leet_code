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

import TreeNode from "./TreeNode";

function postOrderTraversal(root: TreeNode | null): number[] {
  function getList(root: TreeNode | null, list: number[] = []) {
    if (!root) return [];
    if (root.left) {
      getList(root.left, list);
    }
    if (root.right) {
      getList(root.right, list);
    }
    list.push(root.val);
    return list;
  }

  return getList(root, []);
}
