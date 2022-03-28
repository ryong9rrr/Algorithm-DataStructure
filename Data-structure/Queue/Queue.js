// 간단한 큐, 메모리누수가 있음.
class SimpleQueue {
  constructor() {
    this.queue = [];
    this.front = this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    if (this.size === 0) return null;

    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  get size() {
    return this.rear - this.front;
  }

  get peek() {
    return this.size === 0 ? null : this.queue[this.front];
  }
}

// 연결리스트 큐, 효율 굿
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = this.tail = null;
    this.size = 0;
  }

  get peek() {
    return (this.front && this.front.value) || null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (!this.front) {
      this.front = this.tail = newNode;
    } else {
      this.tail = this.tail.next = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) return null;
    const extracted = this.front.value;
    this.front = this.front.next;
    this.size--;
    return extracted;
  }
}
