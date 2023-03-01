# 시간복잡도: 최선 n, 평균 n^2, 최악 n^2
# 공간복잡도: 1
def insert_sort(nums:list)->list:
    n = len(nums)
    for i in range(1, n):
        for j in range(i, 0, -1):
            if nums[j - 1] > nums[j]:
                nums[j - 1], nums[j] = nums[j], nums[j - 1]
            else:
                break
    return nums