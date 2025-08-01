const countdown = (num=[]) => {
    let nuevoArray = []
    for (let i = num; i >= 0; i--) {
        nuevoArray.push(i)
    }
    return nuevoArray
}

console.log(countdown(5))