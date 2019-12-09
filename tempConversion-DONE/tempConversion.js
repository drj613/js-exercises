const ftoc = function(temp) {
  let newTemp;
  newTemp = (temp-32)*(5/9);
  return parseFloat(newTemp.toFixed(1));
}

const ctof = function(temp) {
  let newTemp;
  newTemp = (9/5)*temp + 32;
  return parseFloat(newTemp.toFixed(1));
}


module.exports = {
  ftoc,
  ctof
}

// F = (9/5)C + 32
// C = (F - 32)*(5/9)
