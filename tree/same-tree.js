function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (q && !p)) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = new TreeNode(1, null, new TreeNode(2));
let d = new TreeNode(1, null, new TreeNode(2));
var isSameTreeIterative = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (q && !p)) return false;
  if (p.val != q.val) return false;
  let qStack = [];
  let pStack = [];

  qStack.push(q);
  pStack.push(p);
  while (qStack.length && pStack.length) {
    qNode = qStack.pop();
    pNode = pStack.pop();
    //compare value
    if (pNode.val != qNode.val) return false;
    // make sure that all values exist
    if ((pNode && !qNode) || (qNode && !pNode)) return false;

    if (pNode.left && qNode.left) {
      qStack.push(qNode.left);
      pStack.push(pNode.left);
    } else if (!pNode.left && !qNode.left) {
    } else {
      return false;
    }
    if (pNode.right && qNode.right) {
      qStack.push(qNode.right);
      pStack.push(pNode.right);
    } else if (!pNode.right && !qNode.right) {
    } else {
      return false;
    }
  }
};
