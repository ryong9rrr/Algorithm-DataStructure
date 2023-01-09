// 연결리스트로 구현한 스택. 오류는 없지만 그냥 배열사용하는 것보다 시간이 오래걸림.. 코테에서는 사용 x
class MyNode<T> {
  item: T
  next: MyNode<T> | null
  constructor(item: T, next: MyNode<T> | null) {
    this.item = item
    this.next = next
  }
}

class MyStack<T> {
  private last: MyNode<T> | null
  private _size: number

  constructor() {
    this.last = null
    this._size = 0
  }

  get size() {
    return this._size
  }

  get top() {
    return this.last ? this.last.item : undefined
  }

  push(item: T) {
    this.last = new MyNode(item, this.last)
    this._size += 1
  }

  pop(): T | undefined {
    if (!this.last) {
      return undefined
    }
    const item = this.last.item
    this.last = this.last.next
    this._size -= 1
    return item
  }
}

export default MyStack
