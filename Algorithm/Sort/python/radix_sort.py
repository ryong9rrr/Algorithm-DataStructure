# 시간복잡도: 배열의 길이가 n, 가장 큰 숫자가 d, 숫자의 종류가 b라고 할 때 최선, 평균, 최악 d * (n + b)
# 공간복잡도: O(n + b)
def radix_sort(nums: List[int]) -> List[int]:
    # Find the absolute maximum element to find max number of digits.
    max_num = max([abs(num) for num in nums])

    max_digits = 0
    while max_num > 0:
        max_digits += 1
        max_num = max_num // 10

    place_value = 1
    # Bucket sort function for each place value digit.
    def bucket_sort():
        buckets = [[] for _ in range(10)]
        for num in nums:
            digit = (abs(num) // place_value) % 10
            buckets[digit].append(num)

        # Overwrite 'nums' in sorted order of current place digits.
        index = 0
        for digit in range(10):
            for num in buckets[digit]:
                nums[index] = num
                index += 1
        
    # Radix sort, least significant digit place to most significant.
    for _ in range(max_digits):
        bucket_sort()
        place_value *= 10
    
    # Seperate out negatives and reverse them. 
    positives = [val for val in nums if val >= 0]
    negatives = [val for val in nums if val < 0]
    negatives.reverse()

    # Final 'arr' will be 'negative' elements, then 'positive' elements.
    return negatives + positives