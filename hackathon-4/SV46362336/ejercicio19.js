const repeat = (num, veces) => {
    let arr = []
    for (let i = 1; i <= veces; i++) {
        arr.push(num)
    }
    return arr
}

console.log(repeat(13, 5))