function increseCountByOne(arr) {
  let newArr = arr.join("");
  let str = parseInt(newArr);
  str += 1;
  newArr = str.toString().split("");
  return newArr.map((i) => parseInt(i));
}
console.log(increseCountByOne([1, 2, 3]));
