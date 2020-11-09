const concat = function (array1, array2) {
  const concatArray = [];
  array1.forEach(element => concatArray.push(element));
  array2.forEach(element => concatArray.push(element));
  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));