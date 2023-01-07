class MyListNode {
  key: number
  value: number
  next: MyListNode | null

  constructor(key: number, value: number) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class MyHashMap {
  size: number
  table: Record<number, MyListNode>
  constructor() {
    this.size = 1000
    this.table = {}
  }

  private hash(key: number) {
    return key % this.size
  }

  put(key: number, value: number): void {
    const index = this.hash(key)
    // 인덱스에 노드가 없다면 삽입 후 종료한다.
    if (!this.table[index]) {
      this.table[index] = new MyListNode(key, value)
      return
    }

    // 이미 존재한다면 연결리스트로 연결한다.
    let p = this.table[index]
    while (p) {
      if (p.key === key) {
        // 인덱스와 키가 모두 같은 이런 경우에 값을 넣는다는 것은,
        // 새로운 값을 갱신하겠다는 것으로 본다.
        p.value = value
        return
      }
      if (!p.next) {
        break
      }
      p = p.next
    }
    p.next = new MyListNode(key, value)
  }

  get(key: number): number {
    const index = this.hash(key)
    // 존재하지 않는 인덱스라면 -1을 반환한다.
    if (!this.table[index]) {
      return -1
    }

    // 존재한다면 일치하는 키를 탐색한다.
    let p = this.table[index]
    while (p) {
      if (p.key === key) {
        return p.value
      }
      if (!p.next) {
        return -1
      }
      p = p.next
    }
    // 일치하는 키가 없다면 -1을 반환한다.
    return -1
  }

  remove(key: number): void {
    const index = this.hash(key)
    // 존재하지 않는 인덱스라면 아무것도 하지 않는다.
    if (!this.table[index]) {
      return
    }

    // 존재한다면 일치하는 키를 탐색하고 발견하면 삭제한다.
    // 만약 인덱스의 첫 번째 노드라면
    let p = this.table[index]
    if (p.key === key) {
      if (!p.next) {
        delete this.table[index]
      } else {
        this.table[index] = p.next
      }
      return
    }

    // 그렇지 않다면 연결리스트에서 찾아서 삭제한다.
    let prev = p
    while (p) {
      if (p.key === key) {
        prev.next = p.next
        return
      }
      if (!p.next) {
        return
      }
      let temp = p
      prev = temp
      p = p.next
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
