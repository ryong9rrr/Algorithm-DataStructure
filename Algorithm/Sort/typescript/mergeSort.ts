// 시간복잡도: 최선, 평균, 최악 모두 nlogn
// 공간복잡도: n
function mergeSort(nums: number[]) {
  const tempArr = new Array(nums.length).fill(0)

  const merge = (left: number, mid: number, right: number) => {
    const start1 = left
    const start2 = mid + 1
    const n1 = mid - left + 1
    const n2 = right - mid

    for (let i = 0; i < n1; i += 1) {
      tempArr[start1 + i] = nums[start1 + i]
    }
    for (let i = 0; i < n2; i += 1) {
      tempArr[start2 + i] = nums[start2 + i]
    }

    let i = 0,
      j = 0,
      k = left

    while (i < n1 && j < n2) {
      if (tempArr[start1 + i] <= tempArr[start2 + j]) {
        nums[k] = tempArr[start1 + i]
        i += 1
      } else {
        nums[k] = tempArr[start2 + j]
        j += 1
      }
      k += 1
    }

    while (i < n1) {
      nums[k] = tempArr[start1 + i]
      i += 1
      k += 1
    }
    while (j < n2) {
      nums[k] = tempArr[start2 + j]
      j += 1
      k += 1
    }
  }

  const divide = (left: number, right: number) => {
    if (left >= right) {
      return
    }
    const mid = Math.floor((left + right) / 2)
    divide(left, mid)
    divide(mid + 1, right)
    merge(left, mid, right)
  }

  divide(0, nums.length - 1)
  return nums
}
