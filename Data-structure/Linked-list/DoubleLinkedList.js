class Node {
  constructor(value) {
    this.value = value
    this.prev = this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = this.tail = null
    this.size = 0
  }

  clear() {
    this.head = this.tail = null
    this.size = 0
  }

  desc(inverse = false) {
    const nodes = []
    let currentNode = this.head
    while (currentNode !== null) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }
    return inverse ? nodes.reverse() : nodes
  }

  add(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.size++
  }

  insert(position, value) {
    if (typeof position !== 'number' || position < 0 || position > this.size) {
      return
    }

    let newNode = new Node(value)

    if (position === 0) {
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (position === this.size) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else {
      let index = 0
      let currentNode = this.head
      let prevNode
      while (index++ < position) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      prevNode.next = newNode
      currentNode.prev = newNode
      newNode.prev = prevNode
    }
    this.size++
  }

  remove(value) {
    let currentNode = this.head
    let prevNode = currentNode

    while (currentNode.value !== value && currentNode.next !== null) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (currentNode.value !== value) {
      return undefined
    }

    if (currentNode === this.head) {
      this.head = currentNode.next
      if (this.size === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (currentNode === this.tail) {
      this.tail = currentNode.prev
      this.tail.next = null
    } else {
      prevNode.next = currentNode.next
      currentNode.next.prev = prevNode
    }

    this.size--
  }

  removeAt(position) {
    if (typeof position !== 'number' || position < 0 || position >= this.size) {
      return
    }

    let currentNode = this.head
    let index = 0
    let prevNode

    if (position === 0) {
      this.head = currentNode.next
      if (this.size === 1) {
        this.tail = null
      } else {
        this.head.prev = null
      }
    } else if (position === this.size - 1) {
      currentNode = this.tail
      this.tail = currentNode.prev
      this.tail.next = null
    } else {
      while (index++ < position) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      prevNode.next = currentNode.next
      currentNode.next.prev = prevNode
    }

    this.size--
  }

  indexOf(value) {
    let currentNode = this.head
    let index = 0

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index
      }
      index++
      currentNode = currentNode.next
    }
    return -1
  }

  remove2(value) {
    const index = this.indexOf(value)
    return index > -1 ? this.removeAt(index) : undefined
  }
}

const doubleLinkedList = new DoubleLinkedList()

// 1, 3, 4, 5를 넣는다.
for (const number of [1, 3, 4, 5]) {
  doubleLinkedList.add(number)
}
console.log(doubleLinkedList.desc()) // [1, 3, 4, 5]
console.log(doubleLinkedList.desc(true)) // [5, 4, 3, 1]

// 맨 앞에 2를 넣는다.
doubleLinkedList.insert(0, 2)
console.log(doubleLinkedList.desc()) // [2, 1, 3, 4, 5]
console.log(doubleLinkedList.desc(true)) // [5, 4, 3, 1, 2]

// 맨 뒤에 6을 넣는다.
const lastIdx = doubleLinkedList.size
doubleLinkedList.insert(lastIdx, 6)
console.log(doubleLinkedList.desc()) // [2, 1, 3, 4, 5, 6]
console.log(doubleLinkedList.desc(true)) // [6, 5, 4, 3, 1, 2]
console.log(doubleLinkedList.size) // 6

// 2를 제거한다.
doubleLinkedList.remove(2)
console.log(doubleLinkedList.desc()) // [1, 3, 4, 5, 6]
console.log(doubleLinkedList.desc(true)) // [6, 5, 4, 3, 1]
console.log(doubleLinkedList.size) // 5

// 100을 제거한다. (아무일도 일어나지 않음)
doubleLinkedList.remove(100)
console.log(doubleLinkedList.desc()) // [1, 3, 4, 5, 6]
console.log(doubleLinkedList.desc(true)) // [6, 5, 4, 3, 1]
console.log(doubleLinkedList.size) // 5

// 0번째 원소를 제거한다.
doubleLinkedList.removeAt(0)
console.log(doubleLinkedList.desc()) // [3, 4, 5, 6]
console.log(doubleLinkedList.desc(true)) // [6, 5, 4, 3]
console.log(doubleLinkedList.size) // 4

// 원소 6의 인덱스를 반환한다.
console.log(doubleLinkedList.indexOf(6)) // 3

// 원소 100의 인덱스를 반환한다. (100은 없으니 -1을 반환한다.)
console.log(doubleLinkedList.indexOf(100)) // -1

// 초기화한다.
doubleLinkedList.clear()
console.log(doubleLinkedList.desc()) // []
console.log(doubleLinkedList.desc(true)) // []
console.log(doubleLinkedList.size) // 0
