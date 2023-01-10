class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  desc() {
    const nodes = []
    if (this.head.value) {
      nodes.push(this.head.value)
      let currentNode = this.head.next
      while (currentNode !== this.head) {
        nodes.push(currentNode.value)
        currentNode = currentNode.next
      }
    }
    return nodes
  }

  add(value) {
    let newNode = new Node(value)
    let currentNode = this.head

    if (this.head === null) {
      this.head = newNode
    } else {
      while (currentNode.next !== this.head) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    newNode.next = this.head
    this.size++
  }

  insert(position, value) {
    if (typeof position !== 'number' || position < 0 || position > this.size) {
      return
    }

    let newNode = new Node(value)
    let currentNode = this.head

    if (position === 0) {
      newNode.next = currentNode
      if (this.size === 0) {
        currentNode = newNode
      } else {
        while (currentNode.next !== this.head) {
          currentNode = currentNode.next
        }
      }
      this.head = newNode
      currentNode.next = this.head
    } else {
      let index = 0
      let prevNode
      while (index++ < position) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      prevNode.next = newNode
      if (newNode.next === null) {
        newNode.next = this.head
      }
    }

    this.size++
  }

  remove(value) {
    let currentNode = this.head
    let prevNode = currentNode

    while (currentNode.value !== value && currentNode.next !== this.head) {
      prevNode = currentNode
      currentNode = currentNode.next
    }

    if (currentNode.value !== value) {
      return
    }

    const targetValue = currentNode.value

    if (currentNode === this.head) {
      while (currentNode.next !== this.head) {
        currentNode = currentNode.next
      }
      this.head = this.head.next
      currentNode.next = this.head
    } else {
      prevNode.next = currentNode.next
    }
    this.size--

    return targetValue
  }

  removeAt(position) {
    if (typeof position !== 'number' || position < 0 || position >= this.size) {
      return
    }

    let currentNode = this.head
    let prevNode
    let targetValue

    if (position === 0) {
      targetValue = currentNode.value

      while (currentNode.next !== this.head) {
        currentNode = currentNode.next
      }
      this.head = this.head.next
      currentNode.next = this.head
    } else {
      let index = 0
      while (index++ < position) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      targetValue = currentNode.value
      prevNode.next = currentNode.next
    }
    this.size--
    return targetValue
  }

  indexOf(value) {
    let currentNode = this.head
    let index = 0

    do {
      if (currentNode.value === value) {
        return index
      }
      index++
      currentNode = currentNode.next
    } while (currentNode !== this.head)

    return -1
  }

  remove2(value) {
    const index = this.indexOf(value)
    return index > -1 ? this.removeAt(index) : undefined
  }
}

const circularLinkedList = new CircularLinkedList()

// 원형큐에 원소를 넣는다.
for (const number of [1, 10, 100, 5]) {
  circularLinkedList.add(number)
}
console.log(circularLinkedList.desc()) // [1, 10, 100, 5]

// 원형 큐 맨 처음에 2를 넣는다.
circularLinkedList.insert(0, 2)
console.log(circularLinkedList.desc()) // [2, 1, 10, 100, 5]

// 맨 마지막에 8을 넣는다.
const lastIdx = circularLinkedList.size
circularLinkedList.insert(lastIdx, 8)
console.log(circularLinkedList.desc()) // [2, 1, 10, 100, 5, 8]

// 100을 제거한다.
circularLinkedList.remove(100)
console.log(circularLinkedList.desc()) // [2, 1, 10, 5, 8]
console.log(circularLinkedList.size) // 5

// 원소의 위치를 찾는다.
console.log(circularLinkedList.indexOf(2)) // 0
console.log(circularLinkedList.indexOf(1)) // 1
console.log(circularLinkedList.indexOf(10)) // 2
console.log(circularLinkedList.indexOf(8)) // 4
console.log(circularLinkedList.indexOf(100)) // -1
