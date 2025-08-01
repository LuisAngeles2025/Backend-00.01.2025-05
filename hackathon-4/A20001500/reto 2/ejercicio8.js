// Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

function minMax(num) {
    const minValor = Math.min(...num)
    const maxValor = Math.max(...num)
    return `
    Valor mínimo ${minValor}
    -------------------------
    Valor máximo ${maxValor}`
}

console.log(minMax([10, 5, 20, 15, 8]))