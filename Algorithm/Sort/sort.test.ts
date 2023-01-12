import {
  bubbleSort,
  heapSort,
  insertionSort,
  mergeSort,
  mergeSort2,
  quickSortByHoare,
  quickSortByLomuto,
  selectionSort,
} from "./sort"

const makeRandomNumbers = (length = 10) => {
  const randomDigits = () => Math.ceil((Math.random() * 10) % 4)
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 10 * randomDigits()),
  )
}

const numbers = makeRandomNumbers(50000)
const result = [...numbers].sort((a, b) => a - b)

describe("sort algorithms test", () => {
  test("selection sort", () => {
    const sorted = [...numbers]
    selectionSort(sorted)
    expect(sorted).toEqual(result)
    expect(sorted).not.toEqual(numbers)
  })

  test("bubble sort", () => {
    const sorted = [...numbers]
    bubbleSort(sorted)
    expect(sorted).toEqual(result)
    expect(sorted).not.toEqual(numbers)
  })

  test("insertion sort", () => {
    const sorted = [...numbers]
    insertionSort(sorted)
    expect(sorted).toEqual(result)
    expect(sorted).not.toEqual(numbers)
  })

  test("merge sort", () => {
    const sorted = [...numbers]
    mergeSort(sorted)
    expect(sorted).toEqual(result)
  })

  test("merge sort2", () => {
    const sorted = [...numbers]
    mergeSort2(sorted)
    expect(sorted).toEqual(result)
  })

  test("quickSortByHoare", () => {
    const sorted = [...numbers]
    quickSortByHoare(sorted)
    expect(sorted).toEqual(result)
  })

  test("quickSortByLomuto", () => {
    const sorted = [...numbers]
    quickSortByLomuto(sorted)
    expect(sorted).toEqual(result)
  })

  test("heap sort", () => {
    const sorted = [...numbers]
    heapSort(sorted)
    expect(sorted).toEqual(result)
  })
})

const exc = [1]

describe("sort exception test", () => {
  test("selection sort", () => {
    const sorted = [...exc]
    selectionSort(sorted)
    expect(sorted).toEqual(exc)
  })

  test("bubble sort", () => {
    const sorted = [...exc]
    bubbleSort(sorted)
    expect(sorted).toEqual(exc)
  })

  test("insert sort", () => {
    const sorted = [...exc]
    insertionSort(sorted)
    expect(sorted).toEqual(exc)
  })

  test("merge sort", () => {
    const sorted = [...exc]
    mergeSort(sorted)
    expect(sorted).toEqual(exc)
  })

  test("merge sort2", () => {
    const sorted = [...exc]
    mergeSort(sorted)
    expect(sorted).toEqual(exc)
  })

  test("quickSortByHoare", () => {
    const sorted = [...exc]
    quickSortByHoare(sorted)
    expect(sorted).toEqual(exc)
  })

  test("quickSortByLomuto", () => {
    const sorted = [...exc]
    quickSortByLomuto(sorted)
    expect(sorted).toEqual(exc)
  })

  test("heapSort", () => {
    const sorted = [...exc]
    heapSort(sorted)
    expect(sorted).toEqual(exc)
  })
})
