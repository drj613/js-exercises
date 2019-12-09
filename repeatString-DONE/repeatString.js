const repeatString = function(toRepeat, numTimes) {
  if (numTimes < 0) {
    return 'ERROR';
  }
  let toReturn = '';
  for(let i = 0; i < numTimes; i++) {
    toReturn += toRepeat;
  }
  return toReturn;
}

module.exports = repeatString
