class MyNode<T> {
  value: T
  next: MyNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

class MyQueue<T> {
  private front: MyNode<T> | null
  private tail: MyNode<T> | null
  private _size: number

  constructor(array = []) {
    this.front = this.tail = null
    this._size = 0

    for (const el of array) {
      this.enqueue(el)
    }
  }

  // 편의상 구현한 메서드
  get desc() {
    const result = []
    let node = this.front
    while (node) {
      result.push(node.value)
      node = node.next
    }
    return result.join(" ")
  }

  get peek() {
    return !this.front || !this.tail ? undefined : this.front.value
  }

  get size() {
    return this._size
  }

  enqueue(value: T) {
    const node = new MyNode(value)
    if (!this.front || !this.tail) {
      this.front = this.tail = node
    } else {
      this.tail = this.tail.next = node
    }
    this._size += 1
  }

  dequeue() {
    if (!this.front || !this.tail) {
      return undefined
    }
    const result = this.front.value
    this.front = this.front.next
    this._size -= 1
    return result
  }
}

export default MyQueue
