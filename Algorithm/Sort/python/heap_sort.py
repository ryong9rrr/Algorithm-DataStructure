# 시간복잡도: 최선, 평균, 최악 모두 nlogn
# 공간복잡도: logn
def heap_sort(nums: List[int]) -> List[int]:
    # Function to heapify a subtree (in top-down order) rooted at index i.
    def heapify(n: int, i: int):
        # Initialize largest as root 'i'.
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        # If left child is larger than root.
        if left < n and nums[left] > nums[largest]:
            largest = left
        # If right child is larger than largest so far.
        if right < n and nums[right] > nums[largest]:
            largest = right
        # If largest is not root swap root with largest element
        # Recursively heapify the affected sub-tree (i.e. move down).
        if largest != i:
            nums[i], nums[largest] = nums[largest], nums[i]
            heapify(n, largest)

    def sort():
        n = len(nums)
        # Build heap; heapify (top-down) all elements except leaf nodes.
        for i in range(n // 2 - 1, -1, -1):
            heapify(n, i)
        # Traverse elements one by one, to move current root to end, and
        for i in range(n - 1, -1, -1):
            nums[0], nums[i] = nums[i], nums[0]
            heapify(i, 0)

    sort()
    return nums