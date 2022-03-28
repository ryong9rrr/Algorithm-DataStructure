// 제대로 구현한건지 모르겠음 ㅜㅜ
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  init = (array) => {
    array.sort((a, b) => a - b);

    function sortedArrayToBST(node, array) {
      if (array.length < 1) return;

      let mid = Math.floor(array.length / 2);

      node = new Node(array[mid]);
      node.left = sortedArrayToBST(node.left, array.slice(0, mid));
      node.right = sortedArrayToBST(
        node.right,
        array.slice(mid + 1, array.length)
      );
      return node;
    }

    this.root = sortedArrayToBST(this.root, array);
  };

  inOrder = (node = this.root) => {
    const inOrderNodes = [];

    function _inOrder(node) {
      if (!node) return;
      _inOrder(node.left);
      inOrderNodes.push(node);
      _inOrder(node.right);
    }
    _inOrder(node);
    return inOrderNodes;
  };

  insert = (value) => {
    function dfs(node, value) {
      if (!node) {
        node = new Node(value);
      } else if (value > node.value) {
        node.right = dfs(node.right, value);
      } else {
        node.left = dfs(node.left, value);
      }
      return node;
    }

    return (this.root = dfs(this.root, value));
  };

  _findMinNode = (node) => {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  };

  remove = (value) => {
    const dfs = (node, value) => {
      if (!node) return null;

      if (node.value === value) {
        if (!node.left && !node.right) node = null;
        else if (!node.left) node = node.right;
        else if (!node.right) node = node.left;
        else {
          const aux = this._findMinNode(node.right, value);
          node.value = aux.value;
          node.right = dfs(node.right, aux.value);
        }
      } else if (node.value < value) node.right = dfs(node.right, value);
      else if (node.value > value) node.left = dfs(node.left, value);

      return node;
    };

    return (this.root = dfs(this.root, value));
  };

  has = (value) => {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value < value) currentNode = currentNode.right;
      else if (currentNode.value > value) currentNode = currentNode.left;
      else return true;
    }
    return false;
  };
}
