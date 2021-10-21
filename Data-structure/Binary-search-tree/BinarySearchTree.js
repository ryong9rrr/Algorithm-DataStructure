// Tree
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

/******** inOrder *********/
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
  console.log("end");
};

BinarySearchTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};

BinarySearchTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

BinarySearchTree.prototype._minNode = function (node) {
  if (node === null) {
    return null;
  }
  while (node && node.left !== null) {
    node = node.left;
  }
  return node.value;
};

BinarySearchTree.prototype.min = function () {
  return this._minNode(this.root);
};

BinarySearchTree.prototype._maxNode = function (node) {
  if (node === null) {
    return null;
  }
  while (node && node.right !== null) {
    node = node.right;
  }
  return node.value;
};

BinarySearchTree.prototype.max = function () {
  return this._maxNode(this.root);
};

BinarySearchTree.prototype._searchNode = function (node, value) {
  if (node === null) {
    return false;
  }

  if (node.value === value) {
    return true;
  } else if (node.value > value) {
    return this._searchNode(node.left, value);
  } else if (node.value < value) {
    return this._searchNode(node.right, value);
  }
};

BinarySearchTree.prototype.search = function (value) {
  return this._searchNode(this.root, value);
};

BinarySearchTree.prototype._findMinNode = function (node) {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};

BinarySearchTree.prototype._removeNode = function (node, value) {
  if (node === null) {
    return null;
  }
  if (node.value === value) {
    // case 1: leaf node
    if (node.left === null && node.right === null) {
      node = null;
    }
    // case 2: 1 child node
    else if (node.left === null) {
      node = node.right;
    } else if (node.right === null) {
      node = node.left;
    }
    // case 3: 2 child node
    else {
      let aux = this._findMinNode(node.right);
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }
  } else if (node.value > value) {
    node.left = this._removeNode(node.left, value);
  } else if (node.value < value) {
    node.right = this._removeNode(node.right, value);
  }
  return node;
};

BinarySearchTree.prototype.remove = function (value) {
  this.root = this._removeNode(this.root, value);
};

let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

tree.inOrderTraverse(printNode);

tree.remove("F");

tree.inOrderTraverse(printNode);
console.log(tree);
