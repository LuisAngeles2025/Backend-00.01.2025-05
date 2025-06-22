const capLast = (palabra) => {
    const normal = palabra.slice(0, -1)
    const mayus = palabra.slice(-1).toUpperCase()
    return normal + mayus   
}

console.log(capLast("hello"))