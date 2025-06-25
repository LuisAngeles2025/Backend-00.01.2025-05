const countdown = (num) => {
  let resultado = [];
  for (let i = num; i >= 0; i--) {
    resultado.push(i);
  }
  return resultado;
};

console.log(countdown(5)); 
// [5, 4, 3, 2, 1, 0]