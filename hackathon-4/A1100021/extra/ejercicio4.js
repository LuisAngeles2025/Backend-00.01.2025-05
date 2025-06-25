// 4) Crear una función que reciba n cantidad de argumentos y los sume (utilizar parametros rest)

const sumValors = (...rest) => rest.reduce((sum, valor) => typeof valor == "number" ? sum + valor : sum, 0);

console.log(sumValors(1, 2, 4, 5, 6, "fmdif", { valor: 1 }, false));