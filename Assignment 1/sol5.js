function mergeArr(arr1, m, arr2, n) {
  let arr1Copy = arr1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  let p = 0;

  while (p < m + n) {
    if (p2 >= n || (p1 < m && arr1Copy[p1] < arr2[p2])) {
      arr1[p] = arr1Copy[p1];
      p1++;
    } else {
      arr1[p] = arr2[p2];
      p2++;
    }
    p++;
  }
  return arr1;
}
console.log(mergeArr([1, 2, 3, 0, 0, 0], (m = 3), (nums2 = [2, 5, 6]), 3));
