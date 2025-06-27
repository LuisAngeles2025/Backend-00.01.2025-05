function charIndex(palabra, caracter) {
    let array = []
    const primerIndice = palabra.indexOf(caracter)
    const ultiIndice = palabra.lastIndexOf(caracter)
    array = [primerIndice, ultiIndice]
    return array
}

console.log(charIndex("hello", "l"))