function findNumOfElement(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[count] = arr[i];
      count++;
    }
  }
  return count;
}
