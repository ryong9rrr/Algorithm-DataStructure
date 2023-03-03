import Heap from "./Heap"

describe("Heap test", () => {
  test("test-case 1", () => {
    const numbers = [1]
    const heap = new Heap<number>((a, b) => a - b)
    numbers.forEach((number) => {
      heap.add(number)
    })

    const result = []
    while (heap.size > 0) {
      result.push(heap.extract())
    }

    expect(result).toEqual([1])
  })

  test("test-case 2", () => {
    const numbers = [8, 8, 10, 4, 6, 11, 12, 37, 3, 23]
    const heap = new Heap<number>((a, b) => a - b)
    numbers.forEach((number) => {
      heap.add(number)
    })

    const result = []
    while (heap.size > 0) {
      result.push(heap.extract())
    }

    expect(result).toEqual(numbers.sort((a, b) => a - b))
  })

  test("test-case 3", () => {
    const array: [number, string][] = [
      [1, "yong"],
      [0, "kim"],
      [3, "park"],
      [1, "lee"],
    ]
    const heap = new Heap<[number, string]>((a, b) =>
      a[0] === b[0] ? a[1] < b[1] : a[0] - b[0],
    )
    array.forEach((item) => {
      heap.add(item)
    })

    const result = []
    while (heap.size > 0) {
      result.push(heap.extract())
    }

    expect(result).toEqual([
      [0, "kim"],
      [1, "lee"],
      [1, "yong"],
      [3, "park"],
    ])
  })
})
