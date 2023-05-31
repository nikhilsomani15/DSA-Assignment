function findTarget(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}
console.log(findTarget([-1, 0, 3, 5, 9, 12], 90));
