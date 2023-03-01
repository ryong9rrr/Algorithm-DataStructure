# 시간복잡도: 최선, 평균 nlogn, 최악 n^2
# 공간복잡도: 1
def quicksort(nums:list, start:int, end:int)->list:
    if start >= end:
        return nums
    
    pivot = start
    
    left = start + 1
    right = end

    while left <= right:
        while left <= end and nums[left] <= nums[pivot]:
            left += 1
        while start < right and nums[pivot] <= nums[right]:
            right -= 1
        if left > right:
            nums[right], nums[pivot] = nums[pivot], nums[right]
        else:
            nums[left], nums[right] = nums[right], nums[left]

    quicksort(nums, start, right - 1)
    quicksort(nums, right + 1, end)
    return nums