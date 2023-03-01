# 시간복잡도: 배열의 길이가 n, 가장 큰 숫자와 가장 작은 숫자의 차이를 k라고 할 때 최선, 평균, 최악 모두 n + k
# 공간복잡도: n
def counting_sort(nums: List[int]) -> List[int]:
    # Create the counting hash map.
    counts = {}
    min_num, max_num = min(nums), max(nums)
    # Update element's count in the hash map.
    for num in nums:
        counts[num] = counts.get(num, 0) + 1

    index = 0
    # Place each element in its correct position in the array.
    for num in range(min_num, max_num + 1):
        # Append all 'val's together if they exist.
        while counts.get(num, 0) > 0:
            nums[index] = num
            index += 1
            counts[num] -= 1
    
    return nums