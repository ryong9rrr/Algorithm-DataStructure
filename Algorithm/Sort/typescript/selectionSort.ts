// 시간복잡도: 최선, 평균, 최악 모두 n^2
// 공간복잡도: 1
function selectionSort(nums: number[]) {
  for (let i = 0; i < nums.length; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }
    const temp = nums[minIndex]
    nums[minIndex] = nums[i]
    nums[i] = temp
  }

  return nums
}
