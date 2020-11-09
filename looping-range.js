const range = function (start, end, step) {
  // define variables
  const returnArray = [];

  // define the constraints
  let isUndefined = start === undefined || end === undefined || step === undefined;
  let isStartGreaterEnd = start > end;
  let isStepZeroOrNegative = step <= 0;

  if (isUndefined || isStartGreaterEnd || isStepZeroOrNegative) {
    return returnArray;
  } else {
    for (let i = start; i <= end; i += step) {
      returnArray.push(i);
    }
    return returnArray;
  }
}

console.log(range(-5, 2, 3));