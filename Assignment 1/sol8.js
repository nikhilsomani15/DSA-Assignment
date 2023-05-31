function findMissing(arr) {
  let len = arr.length;
  let dup = -100;
  let set = new Set();
  for (let el of arr) {
    if (set.has(el)) {
      dup = el;
    } else {
      set.add(el);
    }
  }
  let missingElement = -1;
  for (let i = 1; i <= len; i++) {
    if (!set.has(i)) {
      missingElement = i;
      break;
    }
  }
  return [dup, missingElement];
}
console.log(findMissing([1, 2, 2, 4]));
