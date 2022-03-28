class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  #size;
  constructor() {
    this.#size = 0;
    this.head = null;
  }

  get size() {
    return this.#size;
  }

  increase() {
    this.#size++;
  }

  decrease() {
    // 혹시모를 로직 에러에 대비한 코드
    if (this.#size === 0) {
      throw new Error("size가 0이라서 더이상 감소시킬 수 없어요.");
    }
    this.#size--;
  }

  // 연결리스트를 문자열 형태로 보여줍니다.
  get display() {
    let currentNode = this.head;
    let strings = "[";
    while (currentNode) {
      strings += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    if (strings.length > 3) {
      strings = strings.slice(0, strings.length - 2);
    }
    strings += "]";
    return strings;
  }

  //연결리스트에서 value에 해당하는 첫번째 노드를 반환합니다.
  //만약 그런 요소가 없다면 undefined을 반환합니다.
  find(value) {
    if (!this.head) {
      return undefined;
    }

    let node = this.head;
    while (node) {
      if (node.value === value) return node;
      else node = node.next;
    }

    return undefined;
  }

  append(newValue) {
    if (!this.head) {
      this.head = new Node(newValue);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(newValue);
    }
    this.increase();
    return true;
  }

  remove(value) {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.decrease();
      return true;
    }

    let node = this.head;
    while (node.next) {
      if (node.next.value === value) {
        node.next = node.next.next;
        this.decrease();
        return true;
      }
      node = node.next;
    }

    return false;
  }

  insert(node, newValue) {
    if (!node) return false;

    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    this.increase();
    return true;
  }
}
