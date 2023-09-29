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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (root == null) return root;
  if (!root.left && !root.right) return root;
  let temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;
  return root;
};

let p = new TreeNode(null);
console.log(invertTree(p));
