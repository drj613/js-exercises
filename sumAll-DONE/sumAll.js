const sumAll = function(first, second) {
  if (first < 0 || second < 0){
    return 'ERROR';
  }

  if (!Number.isInteger(first) || !Number.isInteger(second)){
    return 'ERROR';
  }
  let temp = 0;
  if (first > second){
    // swapping variables in case of higher number being input first
    temp = first;
    first = second;
    second = temp;
    temp = 0;
  }
  for (let i = first; i < second+1; i++) {
    temp += i;
  }
  return temp;
}

module.exports = sumAll
