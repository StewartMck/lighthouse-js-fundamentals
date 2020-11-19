const merge = function (array1, array2) {
  const concatArray = [];
  array1.forEach(element => concatArray.push(element));
  array2.forEach(element => concatArray.push(element));
  concatArray.sort();
  return concatArray;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));
console.log(merge([4], [2, 5, 8]));
console.log(merge([1, 2, 6], []));