// 3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const tipoValor = (valor) => {
  if (valor === null) return 'null';
  if (Array.isArray(valor)) return 'array';
  if (valor instanceof Date) return 'date';
  if (valor instanceof RegExp) return 'regexp';
  if (typeof valor === 'object') return 'object';
  return typeof valor;
};

console.log(tipoValor(1));
console.log(tipoValor("Hola Mundo"));
console.log(tipoValor(true));
console.log(tipoValor(undefined));
console.log(tipoValor(null));
console.log(tipoValor({nombre: "John", edad: 20}));
console.log(tipoValor([1, 2, 3, 4, 5]));
console.log(tipoValor((x) => x * 2));
console.log(tipoValor(Symbol("id")));
console.log(tipoValor(12345678901234567890n));
console.log(tipoValor(new Date()));
console.log(tipoValor(/regex/));