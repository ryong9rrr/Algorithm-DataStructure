import MyBinaryHeap from "./MyBinaryHeap"

const unsortedNumbers = [8, 8, 10, 4, 6, 11, 12, 37, 3, 23]

const result = unsortedNumbers.sort((a, b) => a - b)

describe("MyBinaryHeap test", () => {
  test("insert()", () => {
    const numbers = [...unsortedNumbers]
    const heap = new MyBinaryHeap()
    numbers.forEach((number) => heap.insert(number))
    expect(heap.size).toEqual(numbers.length)
  })

  test("if use minimum", () => {
    const heap = new MyBinaryHeap()
    unsortedNumbers.forEach((number) => heap.insert(number))

    const expected = []

    while (heap.size > 0) {
      const head = heap.head
      const extracted = heap.extract()
      expect(head).toEqual(extracted)
      expected.push(extracted)
    }
    expect(expected).toEqual(result)
  })

  test("if use maximum", () => {
    const heap = new MyBinaryHeap()
    unsortedNumbers.forEach((number) => heap.insert(-number))

    const expected = []

    while (heap.size > 0) {
      const head = heap.head
      const extracted = heap.extract()
      expect(head).toEqual(extracted)
      expected.push(-extracted)
    }

    expect(expected).toEqual([...result].reverse())
  })

  test("if extract from empty", () => {
    const heap = new MyBinaryHeap()
    expect(() => {
      heap.extract()
    }).toThrow("empty")
  })
})
