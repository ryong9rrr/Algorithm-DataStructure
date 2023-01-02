function expect(received, expected) {
  const result = received === expected;
  console.log(result);
}

function test(message, f) {
  console.log(message);
  f();
}

function describe(message, f) {
  console.log(`<${message}>`);
  f();
}

/*
interface Queue<T> {
  peek: Node | null;
  size: number;
  enqueue: (value: T) => void;
  dequeue: () => void;
}
*/

class Node {
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  #front;
  #tail;
  #size;

  constructor() {
    this.#front = this.#tail = null;
    this.#size = 0;
  }

  get peek() {
    return (this.#front && this.#front.value) || null;
  }

  get size() {
    return this.#size;
  }

  get desc() {
    const result = [];
    let node = this.#front;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result.join(" ");
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.#front) {
      this.#front = this.#tail = node;
    } else {
      this.#tail = this.#tail.next = node;
    }
    this.#size += 1;
  }

  dequeue() {
    if (!this.#front) {
      return null;
    }
    const result = this.#front.value;
    this.#front = this.#front.next;
    this.#size -= 1;
    return result;
  }
}

describe("--Queue test--", () => {
  test("-init test-", () => {
    const queue = new Queue();

    expect(queue.desc, "");
    expect(queue.size, 0);
  });

  test("-enqueue() test-", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.desc, "1 2 3");
    expect(queue.size, 3);
  });

  test("-dequeue() test : check front is null-", () => {
    const queue = new Queue();

    const x = queue.dequeue();

    expect(x, null);
  });

  test("-dequeue() test : check front value-", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const x = queue.dequeue();

    expect(x, 1);
    expect(queue.size, 2);
  });

  test("-dequeue() test : check queue items-", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();

    expect(queue.desc, "2 3");
  });
});
