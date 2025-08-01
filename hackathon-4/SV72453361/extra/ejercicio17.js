const diffMaxMin = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
};

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); 
// 82
