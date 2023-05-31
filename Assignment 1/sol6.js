function findDuplicate(arr) {
  let containsDuplicate = false;
  let set = new Set();
  for (let element of arr) {
    if (set.has(element)) {
      containsDuplicate = true;
    } else {
      set.add(element);
    }
  }
  return containsDuplicate;
}
console.log(findDuplicate([1, 2, 3, 4, 1]));
