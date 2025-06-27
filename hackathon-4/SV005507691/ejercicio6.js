//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.


function obtenerMinMax(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
}

const numeros = [5, 10, 3, 8, 2];
const resultado = obtenerMinMax(numeros);
console.log(resultado); 