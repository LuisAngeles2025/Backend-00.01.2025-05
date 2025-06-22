const diffMaxMin = (arr) => {
    const minValor = Math.min(...arr)
    const maxValor = Math.max(...arr)
    return maxValor - minValor
}

const result = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])

console.log(result)