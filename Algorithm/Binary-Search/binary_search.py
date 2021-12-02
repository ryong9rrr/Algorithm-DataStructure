nums = [1, 3, 4, 5, 7, 8, 9, 10, 12, 14, 17]

target = 4

# 재귀
def recursive_binary_search(left:int, right:int)->int:
    if left <= right:
        mid = (left + right) // 2

        if nums[mid] < target:
            return recursive_binary_search(mid + 1, right)
        elif nums[mid] > target:
            return recursive_binary_search(left, mid - 1)
        else:
            return mid
    else:
        return -1

print(recursive_binary_search(0, len(nums) - 1)) # 2

# 반복
def repeat_binary_search()->int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] < target:
            left = mid + 1
        elif nums[mid] > target:
            right = mid - 1
        else:
            return mid
    return -1

print(repeat_binary_search()) # 2