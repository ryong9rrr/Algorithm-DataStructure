// 1. 구조체 정의
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

// 해당하는 index에 값을 삽입
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
};

// 해당하는 값을 가진 node를 삭제
LinkedList.prototype.remove = function (value) {
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
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

// 해당하는 position(index)위치의 값을 삭제한다.
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

// 해당 값을 갖는 노드의 index을 반환
LinkedList.prototype.indexOf = function (value) {
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

// indexOf와 removeAt을 합친 메소드
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

export { LinkedList };
/* 1. 기본 구조
let ll = new LinkedList();
console.log(ll);
// LinkedList { head: null, length: 0 }

ll.head = new Node(123);
ll.length++;
console.log(ll);
// LinkedList { head: Node { data: 123, next: null }, length: 1 }

ll.head.next = new Node(456);
ll.length++;
console.log(ll);
//
LinkedList {
  head: Node { data: 123, next: Node { data: 456, next: null } },
  length: 2
}


ll.printNode();
// 123 -> 456 -> null

*/

/* 2. append 정의
let ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);

ll.printNode();
// 1 -> 10 -> 100 -> null
*/

/* 3. insert 정의
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.printNode();
console.log(ll.size());
// 100 -> 10 -> 1 -> null
// 3

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();
console.log(ll.size());
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// 5
*/

/* 4. remove 정의
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.remove(1000));
// null
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> 1 -> null
console.log(ll.remove(1));
// 1
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> null
console.log(ll.remove(2));
// 2
ll.printNode();
// 100 -> 10 -> 3 -> null
console.log(ll.remove(100));
// 100
ll.printNode();
// 10 -> 3 -> null
console.log(ll.size());
// 2
*/

/* 5. removeAt 정의
let ll = new LinkedList();
ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
// 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.removeAt(1000));
// null
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> 1 -> null
console.log(ll.removeAt(4));
// 1
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> null
console.log(ll.removeAt());
// 100
ll.printNode();
// 2 -> 10 -> 3 -> null
console.log(ll.removeAt(1));
// 10
ll.printNode();
// 2 -> 3 -> null
console.log(ll.size());
// 2
*/

/* 6. indexOf, remove2 정의
let ll = new LinkedList();
ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
// 100 -> 2 -> 10 -> 3 -> 1 -> null

console.log(ll.indexOf(1000));
// -1
console.log(ll.indexOf(1));
// 4
console.log(ll.indexOf(100));
// 0
console.log(ll.indexOf(10));
// 2
console.log(ll.remove2(1000));
// null
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> 1 -> null
console.log(ll.remove2(1));
// 1
ll.printNode();
// 100 -> 2 -> 10 -> 3 -> null
console.log(ll.remove2(2));
// 2
ll.printNode();
// 100 -> 10 -> 3 -> null
console.log(ll.remove2(100));
// 100
ll.printNode();
// 10 -> 3 -> null
*/
