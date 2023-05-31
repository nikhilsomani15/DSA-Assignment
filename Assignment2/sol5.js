function productMax(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let len = sortedArr.length;
  let max1 = sortedArr[len - 1] * sortedArr[len - 2] * sortedArr[len - 3];
  let max2 = sortedArr[0] * sortedArr[len - 1] * sortedArr[1];
  return Math.max(max1, max2);
}
console.log(productMax([1, 2, -1, 0, -1]));
