const multiplyByLength = (arr=[]) => {
    return arr.map( x => x * arr.length)
}

console.log(multiplyByLength([2, 3, 1, 0]))