const multiplyByLength = (arr) => {
  return arr.map(num => num * arr.length);
};

console.log(multiplyByLength([2, 3, 1, 0])); 
// [8, 12, 4, 0]
