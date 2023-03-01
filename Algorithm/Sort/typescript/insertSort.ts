// 시간복잡도: 최선 n, 평균 n^2, 최악 n^2
// 공간복잡도: 1
function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (nums[j - 1] > nums[j]) {
        ;[nums[j - 1], nums[j]] = [nums[j], nums[j - 1]]
      } else {
        break
      }
    }
  }
  return nums
}
