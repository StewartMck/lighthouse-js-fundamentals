const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};

const smartGarbage = function (trash, bins) {
  switch (trash) {
    case "waste":
      bins.waste += 1;
      break;
    case "recycling":
      bins.recycling += 1;
      break;
    case "compost":
      bins.compost += 1;
      break;
  }
  return bins;
}