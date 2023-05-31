function monotune(arr) {
  increasing = true;
  decreasing = true;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      decreasing = false;
    } else if (arr[i] < arr[i - 1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
}
console.log(monotune([1, 8, 2, 3, 5]));
