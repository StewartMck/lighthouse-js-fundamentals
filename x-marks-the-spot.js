function finalPosition(moves) {
  const endingPosition = [];
  let xPosition = 0;
  let yPosition = 0;
  for (const direction of moves) {
    switch (direction) {
      case 'north':
        yPosition += 1;
        break;
      case 'east':
        xPosition += 1;
        break;
      case 'south':
        yPosition -= 1;
        break;
      case 'west':
        xPosition -= 1;
        break;
      default:
    }
  }
  endingPosition.push(xPosition);
  endingPosition.push(yPosition);
  return endingPosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

console.log(finalPosition(moves));
