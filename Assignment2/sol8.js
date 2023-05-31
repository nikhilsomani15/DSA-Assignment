function minmax(arr, k) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  max -= k;
  min += k;
  return Math.max(max - min, 0);
}
console.log(minmax([1, 4], 1));
