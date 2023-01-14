class MyHeap {
  items: (number | null)[]
  constructor() {
    this.items = [null]
  }

  get size() {
    return this.items.length - 1
  }

  get head() {
    if (this.items.length < 2) return undefined
    return this.items[1]
  }

  // insert heapify
  _percolateUp() {
    let i = this.size
    let parent = Math.floor(i / 2)
    while (parent > 0) {
      if (this.items[i]! < this.items[parent]!) {
        let temp = this.items[parent]
        this.items[parent] = this.items[i]
        this.items[i] = temp
      }
      i = parent
      parent = Math.floor(i / 2)
    }
  }

  insert(k: number) {
    this.items.push(k)
    this._percolateUp()
  }

  // pop heapify
  _percolateDown(idx: number) {
    let left = idx * 2
    let right = idx * 2 + 1
    let smallest = idx

    if (left <= this.size && this.items[left]! < this.items[smallest]!) {
      smallest = left
    }
    if (right < this.size && this.items[right]! < this.items[smallest]!) {
      smallest = right
    }
    if (smallest !== idx) {
      let temp = this.items[idx]
      this.items[idx] = this.items[smallest]
      this.items[smallest] = temp
      this._percolateDown(smallest)
    }
  }

  extract() {
    let extracted = this.items[1] as number
    this.items[1] = this.items[this.size]
    this.items.pop()
    this._percolateDown(1)
    return extracted
  }
}

export default MyHeap
