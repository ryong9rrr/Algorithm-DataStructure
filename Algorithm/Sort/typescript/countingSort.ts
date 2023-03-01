// 시간복잡도: 배열의 길이가 n, 가장 큰 숫자와 가장 작은 숫자의 차이를 k라고 할 때 최선, 평균, 최악 모두 n + k
// 공간복잡도: n
function countingSort(nums: number[]) {
  const counts = {} as Record<string, number>
  const minNum = Math.min(...nums)
  const maxNum = Math.max(...nums)

  nums.forEach((num) => {
    if (!counts[num]) counts[num] = 0
    counts[num] += 1
  })

  let index = 0
  for (let num = minNum; num <= maxNum; num += 1) {
    while (counts[num] > 0) {
      nums[index] = num
      index += 1
      counts[num] -= 1
    }
  }

  return nums
}
