// 시간복잡도: 최선, 평균 nlogn, 최악 n^2
// 공간복잡도: 1

const swap = (array: number[], i: number, j: number) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

// 호어 방식
function quickSortByHoare(nums: number[]) {
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

  quickSort(nums)

  return nums
}

// 로무토 방식
function quickSortByLomuto(nums: number[]) {
  const quickSort = (array: number[], lo = 0, hi = nums.length - 1) => {
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

  quickSort(nums)

  return nums
}
