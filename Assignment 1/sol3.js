function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] == target) return midIndex;
    else if (arr[midIndex] > target) rightIndex = midIndex - 1;
    else leftIndex = midIndex + 1;
  }
}
// using binary search
