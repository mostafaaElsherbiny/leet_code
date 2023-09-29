/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
// [1,null,3,2,4,null,5,6]
let tree = new Node(1, [
  new Node(3, [new Node(5), new Node(6)]),
  new Node(2),
  new Node(4),
]);

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let postorderList = (root, list) => {
    if (root == null) return [];
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        const element = root.children[i];
        postorderList(element, list);
      }
    }
    list.push(root.val);
    return list;
  };
  return postorderList(root, []);
};

console.log(postorder(tree));
