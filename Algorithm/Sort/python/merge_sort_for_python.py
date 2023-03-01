# 파이썬식 병합정렬 (리스트 슬라이싱)
def merge(nums: List[int], left: List[int], right: List[int]):
    i, j, k = 0, 0, 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            nums[k] = left[i]
            i += 1
        else:
            nums[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        nums[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        nums[k] = right[j]
        j += 1
        k += 1

def merge_sort(nums: List[int]) -> List[int]:
    n = len(nums)
    if n <= 1:
        return nums
    mid = n // 2
    left = nums[:mid]
    right = nums[mid:]
    merge_sort(left)
    merge_sort(right)
    merge(nums, left, right)
    return nums

# merge_sort([10, 6, 4, 3, 7, 0, 8, 9])