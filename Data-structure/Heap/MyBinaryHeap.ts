function swap<T>(i: number, j: number, elements: T[]) {
  const temp = elements[i]
  elements[i] = elements[j]
  elements[j] = temp
}

class MyBinaryHeap {
  private elements: (number | null)[]
  constructor() {
    this.elements = [null]
  }

  get size() {
    return this.elements.length - 1
  }

  get head() {
    return this.size === 0 ? undefined : this.elements[1]
  }

  insert(elem: number) {
    this.elements.push(elem)
    this.percolateUp()
  }

  extract() {
    if (this.size === 0) {
      throw new Error("elements is empty.")
    }
    const extracted = this.elements[1] as number
    this.elements[1] = this.elements[this.size]
    this.elements.pop()
    this.percolateDown(1)
    return extracted
  }

  private percolateUp() {
    let i = this.size
    let parent = Math.floor(i / 2)
    while (parent > 0) {
      if (this.elements[i]! < this.elements[parent]!) {
        swap(i, parent, this.elements)
      }
      i = parent
      parent = Math.floor(i / 2)
    }
  }

  private percolateDown(idx: number) {
    const left = idx * 2
    const right = idx * 2 + 1
    let smallest = idx

    if (left <= this.size && this.elements[left]! < this.elements[smallest]!) {
      smallest = left
    }
    if (
      right <= this.size &&
      this.elements[right]! < this.elements[smallest]!
    ) {
      smallest = right
    }
    if (smallest !== idx) {
      swap(idx, smallest, this.elements)
      this.percolateDown(smallest)
    }
  }
}

export default MyBinaryHeap
