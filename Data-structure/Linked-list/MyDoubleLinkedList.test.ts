import { MyNode, MyDoubleLinkedList } from "./MyDoubleLinkedList"

describe("DoubleLinkedList ADT test", () => {
  test("initialize", () => {
    const dll = new MyDoubleLinkedList()
    expect(dll.size).toEqual(0)
  })

  test("add()", () => {
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 3; i += 1) {
      dll.add(new MyNode(i))
    }
    expect(dll.size).toEqual(3)
    expect(dll.desc()).toEqual([0, 1, 2])
    expect(dll.desc(true)).toEqual([2, 1, 0])
  })

  test("find()", () => {
    let targetNode: MyNode<number> | undefined
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 3; i += 1) {
      const node = new MyNode(i)
      if (i === 2) {
        targetNode = node
      }
      dll.add(node)
    }
    const result = dll.find(2)
    expect(targetNode).toEqual(result)
  })

  test("find(): if not find", () => {
    const dll = new MyDoubleLinkedList<number>()
    dll.add(new MyNode(1))
    const result = dll.find(100)
    expect(result).toEqual(undefined)
  })

  test("remove() : remove head", () => {
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 5; i += 1) {
      dll.add(new MyNode(i))
    }
    const targetNode = dll.find(0)
    if (targetNode) {
      dll.remove(targetNode)
    }
    expect(dll.desc()).toEqual([1, 2, 3, 4])
    expect(dll.desc(true)).toEqual([4, 3, 2, 1])
    expect(dll.size).toEqual(4)
  })

  test("remove() : remove tail", () => {
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 5; i += 1) {
      dll.add(new MyNode(i))
    }
    const targetNode = dll.find(4)
    if (targetNode) {
      dll.remove(targetNode)
    }
    expect(dll.desc()).toEqual([0, 1, 2, 3])
    expect(dll.desc(true)).toEqual([3, 2, 1, 0])
    expect(dll.size).toEqual(4)
  })

  test("remove() : remove middle", () => {
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 5; i += 1) {
      dll.add(new MyNode(i))
    }
    const targetNode = dll.find(2)
    if (targetNode) {
      dll.remove(targetNode)
    }
    expect(dll.desc()).toEqual([0, 1, 3, 4])
    expect(dll.desc(true)).toEqual([4, 3, 1, 0])
    expect(dll.size).toEqual(4)
  })

  test("integration", () => {
    const dll = new MyDoubleLinkedList<number>()
    for (let i = 0; i < 5; i += 1) {
      dll.add(new MyNode(i))
    }

    dll.remove(dll.find(2) as MyNode<number>)
    dll.add(new MyNode(6))
    dll.add(new MyNode(7))
    dll.remove(dll.find(0) as MyNode<number>)

    expect(dll.desc()).toEqual([1, 3, 4, 6, 7])
    expect(dll.desc(true)).toEqual([7, 6, 4, 3, 1])
    expect(dll.size).toEqual(5)
  })
})
