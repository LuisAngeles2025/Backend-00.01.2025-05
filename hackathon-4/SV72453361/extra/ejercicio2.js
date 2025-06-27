const sumaCubos = (...numeros) => {
  let total = 0;
  for (let num of numeros) {
    total += num ** 3;
  }
  return total;
};

console.log(sumaCubos(1, 5, 9)); // 855