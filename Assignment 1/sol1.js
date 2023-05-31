function findsum(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const findElement = target - nums[i];
    const indexElement = result.indexOf(findElement);
    if (indexElement !== -1) {
      return [indexElement, i];
    }
    result.push(nums[i]);
  }
}
