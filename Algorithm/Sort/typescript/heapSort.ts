// 시간복잡도: 최선, 평균, 최악 모두 nlogn
// 공간복잡도: logn
function heapSort(nums: number[]) {
  const heapify = (n: number, i: number) => {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2
    if (left < n && nums[left] > nums[largest]) {
      largest = left
    }
    if (right < n && nums[right] > nums[largest]) {
      largest = right
    }
    if (largest !== i) {
      ;[nums[i], nums[largest]] = [nums[largest], nums[i]]
      heapify(n, largest)
    }
  }

  const sort = () => {
    const n = nums.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i -= 1) {
      heapify(n, i)
    }
    for (let i = n - 1; i > 0; i -= 1) {
      ;[nums[0], nums[i]] = [nums[i], nums[0]]
      heapify(i, 0)
    }
  }

  sort()

  return nums
}
