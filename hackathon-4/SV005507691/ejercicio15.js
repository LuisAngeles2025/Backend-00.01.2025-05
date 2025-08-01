//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

function multiplicarPorCantidad(array) {
    const cantidad = array.length;
    return array.map(valor => valor * cantidad);
}

const numeros = [2, 4, 6];
const resultado = multiplicarPorCantidad(numeros);

console.log(resultado);