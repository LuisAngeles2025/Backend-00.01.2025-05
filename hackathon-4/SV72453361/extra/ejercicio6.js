const minMax = (arr) => {
  let minimo = Math.min(...arr);
  let maximo = Math.max(...arr);
  return [minimo, maximo];
};

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]