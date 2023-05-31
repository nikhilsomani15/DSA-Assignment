function addZerotoLast(arr) {
  let len = arr.length;
  let numOfZero = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] !== 0) {
      //swap
      [arr[i], arr[numOfZero]] = [arr[numOfZero], arr[i]];
      numOfZero++;
    }
  }
  return arr;
}
console.log(addZerotoLast([1, 4, 0, 5, 2, 0]));
