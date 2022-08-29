// 연결리스트로 구현한 스택. 오류는 없지만 그냥 배열사용하는 것보다 시간이 오래걸림.. 코테에서는 사용 x
class Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
    this.size = 0
  }

  push(newValue) {
    this.top = new Node(newValue, this.top)
    this.size++
  }

  pop() {
    if (!this.top) return null
    const extracted = this.top.value
    this.top = this.top.next
    this.size--
    return extracted
  }
}

// 스택에 원소를 넣는다.
const stack = new Stack()
for (const number of [1, 2, 4, 5]) {
  stack.push(number)
}

// 스택에서 원소를 꺼낸다.
while (stack.size > 0) {
  console.log(stack.pop()) // 5 4 2 1
}
