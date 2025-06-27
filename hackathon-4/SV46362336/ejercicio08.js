function numMayorMulti(...nums) {
    const soloMayores = []
    for (let i = 0; i < nums.length; i++) {
        const encontrar = Math.max(...nums[i]);
        soloMayores.push(encontrar)
    }
    return soloMayores
}

console.log(numMayorMulti([4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]))