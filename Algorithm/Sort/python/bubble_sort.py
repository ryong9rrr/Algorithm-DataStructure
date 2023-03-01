# 시간복잡도: 최선 n, 평균 n^2, n^2
# 공간복잡도: 1
def bubble_sort(nums:list)->list:
    n = len(nums)
    for _ in range(1, n):
        for i in range(0, n - 1):
            if nums[i] > nums[i + 1]:
                nums[i], nums[i + 1] = nums[i + 1], nums[i]
    return nums