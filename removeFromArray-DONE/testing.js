function restTest(a, b, ...rest){
  console.log(rest);
}

// restTest(1, 2);

// rest will exist as an array regardless of number of params passed in
// restTest(1, 2, 3) => [3]
// restTest(1, 2) => []
