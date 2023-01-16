export class MyNode {
  val: number | string
  left: MyNode | null
  right: MyNode | null

  constructor(val: number | string) {
    this.val = val
    this.left = this.right = null
  }
}

export const preOrder = (treeRoot: MyNode | null) => {
  if (!treeRoot) {
    return []
  }

  const result = []
  const stack: MyNode[] = [treeRoot]
  while (stack.length > 0) {
    const node = stack.pop() as MyNode
    result.push(node.val)
    if (node.right) {
      // stack을 사용하기 때문에 오른쪽 노드부터 넣어줌.
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return result
}

export const inOrder = (treeRoot: MyNode | null) => {
  const result = []
  const stack: MyNode[] = []
  let root = treeRoot
  while (stack.length > 0 || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop() as MyNode
    result.push(root.val)
    root = root.right
  }
  return result
}

export const postOrder = (treeRoot: MyNode | null) => {
  if (!treeRoot) {
    return []
  }
  const result = []
  const stack: MyNode[] = [treeRoot]
  const outputStack: MyNode[] = []
  while (stack.length > 0) {
    const node = stack.pop() as MyNode
    outputStack.push(node)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  while (outputStack.length > 0) {
    result.push(outputStack.pop()!.val)
  }
  return result
}
