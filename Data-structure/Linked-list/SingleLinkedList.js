class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // node를 배열형태로 보여준다.
  desc() {
    const nodes = []
    let currentNode = this.head
    while (currentNode !== null) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }
    return nodes
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // value: any
  // return Node | undefined
  find(value) {
    let currentNode = this.head
    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        return undefined
      }
      currentNode = currentNode.next
    }
    return currentNode
  }

  // newValue: any
  // return void
  add(newValue) {
    const newNode = new Node(newValue)

    if (this.head === null) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.size++
  }

  // node가 존재하지 않는다면 에러, Node 인스턴스가 아니라면 에러.
  // node 바로 뒤에 새로운 노드를 생성한다.
  insert(node, newValue) {
    if (node === undefined) {
      throw new Error('존재하지 않는 Node입니다.')
    }

    if (!(node instanceof Node)) {
      throw new Error('Node 인스턴스가 아닙니다.')
    }

    const newNode = new Node(newValue)
    newNode.next = node.next
    node.next = newNode
    this.size++
  }

  insertOfIndex(position, newValue) {
    if (typeof position !== 'number' || position < 0 || position > this.size) {
      return
    }

    const newNode = new Node(newValue)
    if (position === 0) {
      if (this.head === null) {
        this.head = this.tail = newNode
      } else {
        newNode.next = this.head
        this.head = newNode
      }
    } else if (position === this.size) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      let index = 1
      let currentNode = this.head
      let prevNode = this.head
      currentNode = currentNode.next
      while (index++ < position) {
        prevNode = prevNode.next
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      prevNode.next = newNode
    }
    this.size++
  }

  // 존재하지 않는 값을 삭제하려해도 아무일도 일어나지 않음.
  delete(value) {
    if (this.head === null) {
      return
    }
    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next
          this.size--
          return
        }
        currentNode = currentNode.next
      }
    }
  }
}

// 테스트케이스
const linkedList = new SingleLinkedList()

// 1, 2, 3, 5를 넣으면 1, 2, 3, 5가 담긴다.
for (const number of [1, 2, 3, 5]) {
  linkedList.add(number)
}

// 0번째 자리에 7을 넣는다.
linkedList.insertOfIndex(0, 7)
console.log(linkedList.desc()) // [7, 1, 2, 3, 5]
console.log(linkedList.size) // 5

// value가 1인 노드를 찾는다.
console.log(linkedList.find(1)) // Node { next: Node { next: Node { next: [Node], value: 3 }, value: 2 }, value: 1 }

// 존재하지 않는 Node를 찾으려하면 undefined를 반환한다.
console.log(linkedList.find(6)) // undefined

// insert에 노드가 아닌 값을 넣으면 에러를 출력한다.
// linkedList.insert(10, 3) // Node 인스턴스가 아닙니다.

// insert에 존재하지 않는 노드에 값을 집어넣으려하면 에러를 출력한다.
// linkedList.insert(linkedList.find(100), 3) // 존재하지 않는 Node 입니다.

// 노드 1 뒤에 4를 넣는다.
linkedList.insert(linkedList.find(1), 4)
console.log(linkedList.desc()) // [7, 1, 4, 2, 3, 5]

// 노드 5 뒤에 6을 넣는다.
linkedList.insert(linkedList.find(5), 6)
console.log(linkedList.desc()) // [7, 1, 4, 2, 3, 5, 6]

// Node 1을 삭제한다.
linkedList.delete(1)
console.log(linkedList.desc()) // [7, 4, 2, 3, 5, 6]
console.log(linkedList.size) // 6

// 존재하지 않는 값을 삭제하면 아무일도 일어나지 않는다.
linkedList.delete()
console.log(linkedList.desc()) // [7, 4, 2, 3, 5, 6]
linkedList.delete(10)
console.log(linkedList.desc()) // [7, 4, 2, 3, 5, 6]
console.log(linkedList.size) // 6

// 연결리스트를 초기화한다.
linkedList.clear()
console.log(linkedList.desc()) // []
console.log(linkedList.size) // 0
