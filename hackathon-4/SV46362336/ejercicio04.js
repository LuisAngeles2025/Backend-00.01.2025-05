function sumaN(...num) {
    let suma = 0
    for (let i = 0; i < num.length; i++)
        suma += num[i]
    return suma
}

console.log(sumaN(3,4,5,22))