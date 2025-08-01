const formatPhone = (numeros) => {
  let texto = numeros.join("");
  return `(${texto.slice(0,3)}) ${texto.slice(3,6)}-${texto.slice(6)}`;
};

console.log(formatPhone([1,2,3,4,5,6,7,8,9,0]));
// Resultado: (123) 456-7890