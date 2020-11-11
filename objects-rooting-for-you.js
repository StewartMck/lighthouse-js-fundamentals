const judgeVegetable = function (vegetables, metric) {
  let highestRanking = 0;
  let submitter = "";
  for (let element of vegetables) {
    if (element[metric] > highestRanking) {
      highestRanking = element[metric];
      submitter = element['submitter'];
    }
  }
  return submitter;
}