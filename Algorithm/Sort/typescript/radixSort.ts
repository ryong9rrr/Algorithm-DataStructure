// 시간복잡도: 배열의 길이가 n, 가장 큰 숫자가 d, 숫자의 종류가 b라고 할 때 최선, 평균, 최악 d * (n + b)
// 공간복잡도: O(n + b)
function radixSort(nums: number[]) {
  let maxNum = Math.max(...nums.map((num) => Math.abs(num)))
  let maxDigits = 0
  while (maxNum > 0) {
    maxDigits += 1
    maxNum = Math.floor(maxNum / 10)
  }

  let placeValue = 1
  const bucketSort = () => {
    const buckets: number[][] = Array.from({ length: 10 }, () => [])
    nums.forEach((num) => {
      const digit = Math.floor(Math.abs(num) / placeValue) % 10
      buckets[digit].push(num)
    })

    let index = 0
    for (let digit = 0; digit < 10; digit += 1) {
      for (const num of buckets[digit]) {
        nums[index] = num
        index += 1
      }
    }
  }

  for (let _ = 0; _ < maxDigits; _ += 1) {
    bucketSort()
    placeValue *= 10
  }

  const positives: number[] = []
  const negatives: number[] = []
  nums.forEach((num) => {
    if (num < 0) {
      negatives.push(num)
    } else {
      positives.push(num)
    }
  })

  negatives.reverse()

  return [...negatives, ...positives]
}
