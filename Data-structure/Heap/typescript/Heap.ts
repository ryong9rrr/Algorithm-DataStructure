export default class Heap<T> {
  private values: T[]

  private compareFn: (a: T, b: T) => boolean | number

  constructor(compareFn: (a: T, b: T) => boolean | number) {
    this.values = []

    this.compareFn = compareFn
  }

  private compare(a: T, b: T) {
    const result = this.compareFn(a, b)
    if (typeof result === "boolean") {
      return result
    }
    return result < 0 ? true : false
  }

  get top() {
    return this.values.length > 0 ? this.values[0] : undefined
  }

  get size() {
    return this.values.length
  }

  add(element: T) {
    this.values.push(element)
    this.percolateUp(this.values.length - 1)
  }

  extract() {
    if (this.values.length < 1) {
      throw new Error("heap is empty")
    }

    const top = this.values[0]
    const end = this.values.pop() as T

    if (this.values.length > 0) {
      this.values[0] = end
      this.percolateDown(0)
    }

    // return the top
    return top
  }

  private swap(aIndex: number, bIndex: number) {
    ;[this.values[aIndex], this.values[bIndex]] = [
      this.values[bIndex],
      this.values[aIndex],
    ]
  }

  private parent(index: number) {
    return Math.floor(Math.floor((index - 1) / 2))
  }

  private leftChild(index: number) {
    return index * 2 + 1
  }

  private rightChild(index: number) {
    return index * 2 + 2
  }

  private isLeaf(index: number) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    )
  }

  private percolateUp(index: number) {
    let currentIndex = index
    let parentIndex = this.parent(currentIndex)

    while (
      currentIndex > 0 &&
      this.compare(this.values[currentIndex], this.values[parentIndex])
    ) {
      this.swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = this.parent(parentIndex)
    }
  }

  private percolateDown(index: number) {
    if (this.isLeaf(index)) {
      return
    }

    let leftChildIndex = this.leftChild(index)
    let rightChildIndex = this.rightChild(index)
    let largestIndex = index

    if (
      leftChildIndex < this.values.length &&
      this.compare(this.values[leftChildIndex], this.values[largestIndex])
    ) {
      largestIndex = leftChildIndex
    }

    if (
      rightChildIndex < this.values.length &&
      this.compare(this.values[rightChildIndex], this.values[largestIndex])
    ) {
      largestIndex = rightChildIndex
    }

    if (largestIndex !== index) {
      this.swap(index, largestIndex)
      this.percolateDown(largestIndex)
    }
  }
}
