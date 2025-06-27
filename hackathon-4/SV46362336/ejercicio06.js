function minMax(num) {
    const minValor = Math.min(...num)
    const maxValor = Math.max(...num)
    return `
    Valor mínimo ${minValor}
    -------------------------
    Valor máximo ${maxValor}`
}

console.log(minMax([10, 5, 20, 15, 8]))