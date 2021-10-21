function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
  return this.length;
};

DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

/* 1. 기본구조에서 node 하나를 추가할 때, 
그냥 연결리스트보다 tail, prev 등 신경써줘야할 것이 많음
let dll = new DoubleLinkedList();
let node;
node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
*/

DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];
  process.stdout.write("null <- ");

  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }

  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }

  console.log("tail");
};

DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.length++;
};

DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
    current.prev = node;
    node.prev = prev;
  }

  this.length++;

  return true;
};

DoubleLinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};

/* 2. 1에서 하나의 노드를 추가할 때 해야할 것들을 바탕으로 구현
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode();
// head -> 100 -> 10 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 10 <- 1 <- tail

dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove(1000));
// null
console.log(dll.remove(1));
// 1
console.log(dll.remove(2));
// 2
console.log(dll.remove(100));
// 100

dll.printNode();
// head -> 10 -> 3 -> null
dll.printNodeInverse();
// null <- 10 <- 3 <- tail
*/

DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};

DoubleLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};

DoubleLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

/*
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.indexOf(1000));
// -1
console.log(dll.indexOf(1));
// 4
console.log(dll.indexOf(100));
// 0
console.log(dll.indexOf(10));
// 2

console.log(dll.remove2(1000));
// null
dll.printNode();
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove2(4));
// null
dll.printNode();
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove2());
// null
dll.printNode();
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

console.log(dll.remove2(100));
// 100
dll.printNode();
// head -> 2 -> 10 -> 3 -> 1 -> null
dll.printNodeInverse();
// null <- 2 <- 10 <- 3 <- 1 <- tail
*/
