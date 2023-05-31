function maxCandies(arr) {
  let unique = new Set(arr);
  return Math.min(unique.size, arr.length / 2);
}
console.log(maxCandies([1, 1, 2, 2, 3, 3, 3, 3,3]));
