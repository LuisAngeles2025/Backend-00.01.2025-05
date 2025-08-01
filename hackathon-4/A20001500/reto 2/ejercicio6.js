// Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function minMax(num) {
    const minValor = Math.min(...num)
    const maxValor = Math.max(...num)
    return Array ` ${minValor} , ${maxValor} `
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([17, 6, 35, 15, 8]))