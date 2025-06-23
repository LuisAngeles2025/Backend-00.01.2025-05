//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

function diferenciaMaxMin(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

console.log(diferenciaMaxMin([10, 5, 20, 3]));
console.log(diferenciaMaxMin([8, 8, 8])); 