class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    let currentRoot = this.root;
    while (true) {
      if (currentRoot.value > value) {
        if (!currentRoot.left) {
          currentRoot.left = newNode;
          return this;
        }
        currentRoot = currentRoot.left;
      } else {
        if (!currentRoot.right) {
          currentRoot.right = newNode;
          return this;
        }
        currentRoot = currentRoot.right;
      }
    }
  }

  lookUp(value) {
    if (!this.root.value == value) {
      return false;
    }
    let currentRoot = this.root;
    while (currentRoot) {
      if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      } else if (value === currentRoot.value) {
        return currentRoot;
      }
    }
  }

  breadthFirstSearch() {
    let current = this.root;
    let list = [];
    let queue = [];
    queue.push(current);
    while (queue.length > 0) {
      current = queue.shift();
      list.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return list;
  }
  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let current = queue.shift();
    list.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, []);
  }
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, []);
  }
  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, []);
  }
}
function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}
const tree = new Tree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
let list = tree.breadthFirstSearch();
let listR = tree.breadthFirstSearchRecursive([tree.root], []);
let listDInOrder = tree.depthFirstSearchInOrder();
console.log(listDInOrder);
//     9
//  4       20
// 1   6  15  170
