import MyHeap from "./MyHeap"

const makeRandomNumbers = (length = 10) => {
  const randomDigits = () => Math.ceil((Math.random() * 10) % 4)
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 10 * randomDigits()),
  )
}

const randomNumbers = makeRandomNumbers()
const result = randomNumbers.sort((a, b) => a - b)

describe("MyHeap test", () => {
  test("if use minimum", () => {
    const numbers = [...randomNumbers]
    const heap = new MyHeap()
    for (const number of numbers) {
      heap.insert(number)
    }

    const expected = []

    for (let i = 0; i < numbers.length; i++) {
      expected.push(heap.extract())
    }

    expect(expected).toEqual(result)
  })

  test("if use maximum", () => {
    const numbers = [...randomNumbers]
    const heap = new MyHeap()
    for (const number of numbers) {
      heap.insert(-number)
    }

    const expected = []

    for (let i = 0; i < numbers.length; i++) {
      expected.push(-heap.extract())
    }

    expect(expected).toEqual([...result].reverse())
  })

  test("size getter test", () => {
    const numbers = [...randomNumbers]
    const heap = new MyHeap()
    for (const number of numbers) {
      heap.insert(number)
    }

    const expected = []

    while (heap.size > 0) {
      expected.push(heap.extract())
    }

    expect(expected).toEqual(result)
  })
})
