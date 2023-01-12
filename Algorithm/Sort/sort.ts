export const selectionSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j
      }
    }
    const temp = numbers[minIndex]
    numbers[minIndex] = numbers[i]
    numbers[i] = temp
  }
}

export const bubbleSort = (numbers: number[]) => {
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = 1; j < numbers.length; j += 1) {
      if (numbers[j - 1] > numbers[j]) {
        const temp = numbers[j]
        numbers[j] = numbers[j - 1]
        numbers[j - 1] = temp
      }
    }
  }
}

export const insertionSort = (numbers: number[]) => {
  for (let i = 1; i < numbers.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (numbers[j] < numbers[j - 1]) {
        const temp = numbers[j - 1]
        numbers[j - 1] = numbers[j]
        numbers[j] = temp
      } else {
        break
      }
    }
  }
}

export const mergeSort = (array: number[]) => {
  const temp = new Array(array.length).fill(0)

  const merge = (arr: number[], left: number, right: number) => {
    let mid = Math.floor((left + right) / 2)
    let l = left
    let r = mid + 1
    let k = left

    while (l <= mid && r <= right) {
      if (arr[l] <= arr[r]) {
        temp[k] = arr[l]
        l++
      } else {
        temp[k] = arr[r]
        r++
      }
      k++
    }

    if (l <= mid) {
      for (let i = l; i <= mid; i++) {
        temp[k++] = arr[i]
      }
    } else {
      for (let i = r; i <= right; i++) {
        temp[k++] = arr[i]
      }
    }

    for (let i = left; i <= right; i++) {
      arr[i] = temp[i]
    }
  }

  const divide = (arr: number[], left = 0, right = array.length - 1) => {
    if (left >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    divide(arr, left, mid)
    divide(arr, mid + 1, right)
    merge(arr, left, right)
  }

  divide(array)
}

export const mergeSort2 = (array: number[]) => {
  const merge = (arr: number[], left: number, mid: number, right: number) => {
    let n1 = mid - left + 1
    let n2 = right - mid

    // Create temp arrays
    let leftArr = new Array(n1)
    let rightArr = new Array(n2)

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
      leftArr[i] = arr[left + i]
    }
    for (let i = 0; i < n2; i++) {
      rightArr[i] = arr[mid + 1 + i]
    }

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0

    // Initial index of second subarray
    let j = 0

    // Initial index of merged subarray
    let k = left

    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i]
        i++
      } else {
        arr[k] = rightArr[j]
        j++
      }
      k++
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = leftArr[i]
      i++
      k++
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = rightArr[j]
      j++
      k++
    }
  }

  const divide = (arr: number[], left = 0, right = array.length - 1) => {
    if (left >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    divide(arr, left, mid)
    divide(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }

  divide(array)
}

// 호어 방식
export const quickSortByHoare = (numbers: number[]) => {
  const swap = (array: number[], i: number, j: number) => {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }

  const quickSort = (array: number[], start = 0, end = array.length - 1) => {
    if (start >= end) return

    const pivot = start
    let left = start + 1
    let right = end

    while (left <= right) {
      while (left <= end && array[left] <= array[pivot]) {
        left++
      }
      while (start < right && array[pivot] <= array[right]) {
        right--
      }
      if (left <= right) {
        swap(array, left, right)
      } else {
        swap(array, right, pivot)
      }
    }

    quickSort(array, start, right - 1)
    quickSort(array, right + 1, end)
  }

  quickSort(numbers)
}

// 로무토 방식
export const quickSortByLomuto = (numbers: number[]) => {
  const swap = (array: number[], i: number, j: number) => {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }

  const quickSort = (array: number[], lo = 0, hi = numbers.length - 1) => {
    const partition = (lo: number, hi: number) => {
      const pivot = array[hi]
      let left = lo
      for (let right = lo; right < hi; right++) {
        if (array[right] < pivot) {
          swap(array, left, right)
          left++
        }
      }
      swap(array, left, hi)
      return left
    }

    if (lo < hi) {
      const pivot = partition(lo, hi)
      quickSort(array, lo, pivot - 1)
      quickSort(array, pivot + 1, hi)
    }
  }

  quickSort(numbers)
}

export const heapSort = (numbers: number[]) => {
  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  const heapify = (arr: number[], N: number, i: number) => {
    let largest = i // Initialize largest as root
    const left = 2 * i + 1 // left = 2*i + 1
    const right = 2 * i + 2 // right = 2*i + 2

    // If left child is larger than root
    if (left < N && arr[left] > arr[largest]) {
      largest = left
    }

    // If right child is larger than largest so far
    if (right < N && arr[right] > arr[largest]) {
      largest = right
    }

    // If largest is not root
    if (largest != i) {
      const temp = arr[i]
      arr[i] = arr[largest]
      arr[largest] = temp

      // Recursively heapify the affected sub-tree
      heapify(arr, N, largest)
    }
  }

  const sort = (arr: number[]) => {
    const N = arr.length

    // Build heap (rearrange array)
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
      heapify(arr, N, i)
    }

    // One by one extract an element from heap
    for (let i = N - 1; i > 0; i--) {
      // Move current root to end
      const temp = arr[0]
      arr[0] = arr[i]
      arr[i] = temp

      // call max heapify on the reduced heap
      heapify(arr, i, 0)
    }
  }

  sort(numbers)
}
