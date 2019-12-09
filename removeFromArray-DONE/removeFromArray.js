const removeFromArray = function(range, ...toRemove){
  if (toRemove.length == 0){
    return range;
  } else if (toRemove.length == 1){
    for (let i = 0; i < range.length; i++) {
      if (range[i] === toRemove[0]){
        range.splice(i, 1);
        return range;
      }
    }
  } else {
    // let items =[1, 2, 3, 4];
    // let valuesToRemove = [1,3,4]
    // items = items.filter((i) => (valuesToRemove.indexOf(i) === -1)
      return range.filter((i) => (toRemove.indexOf(i) === -1));
    }
}

module.exports = removeFromArray;
