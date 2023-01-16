import { inOrder, MyNode, postOrder, preOrder } from "./MyIterativeTreeOrder"

let root: MyNode | null = null
describe("treeOrder Iterative algorithms test", () => {
  beforeEach(() => {
    root = new MyNode("F")
    root.left = new MyNode("B")
    root.right = new MyNode("G")
    root.left.left = new MyNode("A")
    root.left.right = new MyNode("D")
    root.left.right.left = new MyNode("C")
    root.left.right.right = new MyNode("E")
    root.right.right = new MyNode("I")
    root.right.right.left = new MyNode("H")
  })

  test("preOrder()", () => {
    const result = ["F", "B", "A", "D", "C", "E", "G", "I", "H"]
    expect(preOrder(root)).toEqual(result)
  })

  test("inOrder()", () => {
    const result = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    expect(inOrder(root)).toEqual(result)
  })

  test("postOrder()", () => {
    const result = ["A", "C", "E", "D", "B", "H", "I", "G", "F"]
    expect(postOrder(root)).toEqual(result)
  })
})
