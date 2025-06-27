const tipoValor = (valor) => {
  return typeof valor;
};

console.log(tipoValor(10));       // number
console.log(tipoValor("hola"));   // string
console.log(tipoValor(true));     // boolean