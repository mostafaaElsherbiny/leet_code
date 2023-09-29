/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return isSame(root.left, root.right);
};
// A tree is called symmetric if the left subtree must be a mirror reflection of the right subtree...
var isSame = function (l, r) {
  // If both root nodes are null pointers, return true...
  // If exactly one of them is a null node, return false...
  // If root nodes haven't same value, return false...
  if ((!l && r) || (l && !r) || (l && r && l.val !== r.val)) {
    return false;
  }
  // Return true if the values of root nodes are same and left as well as right subtrees are symmetric...
  if (l && r) {
    return isSame(l.left, r.right) && isSame(l.right, r.left);
  }
  return true;
};

let p = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(p));
