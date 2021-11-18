import heapq

numbers = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9]

def selection_sort(arr:list)->list:
    numbers = arr
    n = len(arr)
    for i in range(n):
        #once, set front number is the min number.
        min_index = i
        #search next number
        for j in range(i+1, n):
            if numbers[min_index] > numbers[j]:
                min_index = j
        numbers[i], numbers[min_index] = numbers[min_index], numbers[i]
    return numbers

#print(selection_sort(numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def bubble_sort(arr:list)->list:
    n = len(arr)
    numbers = arr
    for i in range(1, n):
        for j in range(0, n - 1):
            if numbers[j] > numbers[j + 1]:
                numbers[j], numbers[j + 1] = numbers[j + 1], numbers[j]
    return numbers

#print(bubble_sort(numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def insert_sort(arr:list)->list:
    n = len(arr)
    numbers = arr
    for i in range(1, n):
        for j in range(i, 0, -1):
            if numbers[j - 1] > numbers[j]:
                numbers[j - 1], numbers[j] = numbers[j], numbers[j - 1]
            else:
                break
    return numbers

#print(insert_sort(numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def quicksort(arr:list, start:int, end:int)->list:
    array = arr
    if start >= end:
        return
    pivot = start
    left = start + 1
    right = end

    while left <= right:
        while left <= end and array[left] <= array[pivot]:
            left += 1
        while start < right and array[pivot] <= array[right]:
            right -= 1
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[left], array[right] = array[right], array[left]

    quicksort(array, start, right - 1)
    quicksort(array, right + 1, end)
    return array

#print(quicksort(numbers, 0, len(numbers)-1))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def merge(list:list, left:int, right:int)->None:
    i, j, k = 0, 0, 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            list[k] = left[i]
            i += 1
        else:
            list[k] = right[j]
            j += 1
        k += 1
    while i < len(left):
        list[k] = left[i]
        i += 1
        k += 1
    while j < len(right):
        list[k] = right[j]
        j += 1
        k += 1

def merge_sort(arr:list)->list:
    list = arr
    n = len(list)
    if n <= 1:
        return
    mid = n // 2
    left = list[:mid]
    right = list[mid:]
    merge_sort(left)
    merge_sort(right)
    merge(list, left, right)
    return list

#print(merge_sort(numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def heap_sort(arr:list)->list:
    result = []
    heap = []
    for number in arr:
        heapq.heappush(heap, number)

    while heap:
        result.append(heapq.heappop(heap))
    return result

#print(heap_sort(numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]