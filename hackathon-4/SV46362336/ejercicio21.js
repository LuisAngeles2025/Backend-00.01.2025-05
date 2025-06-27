const findNemo = (palabra) => {
    const espacios = palabra.split(' ')
    for (let i = 0; i < espacios.length; i++) {
    if (espacios[i] === "Nemo") {
      return `I found Nemo at ${i + 1}!`
    }
  }
}

console.log(findNemo("I am finding Nemo !"))