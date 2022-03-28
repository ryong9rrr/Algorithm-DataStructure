class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  levelOrder() {
    const result = [];
    const q = [];
    q.push(this.root);
    while (q.length > 0) {
      const currentNode = q.shift();
      result.push(currentNode.value);
      if (currentNode.left) q.push(currentNode.left);
      if (currentNode.right) q.push(currentNode.right);
    }
    return result;
  }

  preOrder(node = this.root) {
    const preOrderResult = [];

    function _preOrder(node) {
      if (!node) return;
      preOrderResult.push(node.value);
      _preOrder(node.left);
      _preOrder(node.right);
    }
    _preOrder(node);
    return preOrderResult;
  }

  inOrder(node = this.root) {
    const inOrderResult = [];

    function _inOrder(node) {
      if (!node) return;
      _inOrder(node.left);
      inOrderResult.push(node.value);
      _inOrder(node.right);
    }
    _inOrder(node);
    return inOrderResult;
  }

  postOrder(node = this.root) {
    const postOrderResult = [];

    function _postOrder(node) {
      if (!node) return;
      _postOrder(node.left);
      _postOrder(node.right);
      postOrderResult.push(node.value);
    }
    _postOrder(node);
    return postOrderResult;
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

console.log(tree.levelOrder()); // [ 9, 3, 8, 2, 5, 7, 4 ]

console.log(tree.preOrder()); // [ 9, 3, 2, 5, 4, 8, 7 ]

console.log(tree.inOrder()); // [ 2, 3, 5, 4, 9, 8, 7 ]

console.log(tree.postOrder()); // [ 2, 4, 5, 3, 7, 8, 9 ]
