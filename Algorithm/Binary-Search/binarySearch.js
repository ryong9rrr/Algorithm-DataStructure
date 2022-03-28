const nums = [1, 3, 4, 5, 7, 8, 9, 10, 12, 14, 17];

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(nums, 7)); // 4

function binarySearchRecursive(array, target) {
  function _recursive(left, right) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < target) return _recursive(mid + 1, right);
    else if (array[mid] > target) return _recursive(left, mid - 1);
    else return mid;
  }

  return _recursive(0, array.length - 1);
}

console.log(binarySearchRecursive(nums, 7)); // 4
