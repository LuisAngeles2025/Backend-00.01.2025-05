const squaresSum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
  }
  return total;
};

console.log(squaresSum(3)); 
// 1² + 2² + 3² = 14
