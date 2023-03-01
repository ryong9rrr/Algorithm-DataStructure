// 시간복잡도: 최선 n, 평균 n^2, n^2
// 공간복잡도: 1
function bubbleSort(nums: number[]) {
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = 1; j < nums.length; j += 1) {
      if (nums[j - 1] > nums[j]) {
        const temp = nums[j]
        nums[j] = nums[j - 1]
        nums[j - 1] = temp
      }
    }
  }
  return nums
}
