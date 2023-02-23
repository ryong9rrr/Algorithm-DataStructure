import MaxHeap from "./MaxHeap"

describe("MaxHeap test", () => {
  test("add()", () => {
    const numbers = [8, 8, 10, 4, 6, 11, 12, 37, 3, 23]

    const heap = new MaxHeap()
    numbers.forEach((number) => heap.add(number))
    expect(heap.size).toEqual(numbers.length)
  })

  test("extract() from empty", () => {
    const heap = new MaxHeap()
    heap.add(1)
    expect(heap.size).toEqual(1)
    expect(heap.extractMax()).toEqual(1)
    expect(heap.size).toEqual(0)
    expect(() => {
      heap.extractMax()
    }).toThrow("empty")
  })

  test("extract()", () => {
    const numbers = [1, 2, 3]

    const heap = new MaxHeap()
    numbers.forEach((n) => heap.add(n))
    while (heap.size > 0) {
      expect(heap.extractMax()).toEqual(numbers.pop())
    }
  })
})
