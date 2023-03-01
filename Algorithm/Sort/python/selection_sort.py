# 시간복잡도: 최선, 평균, 최악 모두 n^2
# 공간복잡도: 1
def selection_sort(nums:list)->list:
    n = len(nums)
    for i in range(n):
        #once, set front number is the min number.
        min_index = i
        #search next number
        for j in range(i+1, n):
            if nums[min_index] > nums[j]:
                min_index = j
        nums[i], nums[min_index] = nums[min_index], nums[i]
    return nums