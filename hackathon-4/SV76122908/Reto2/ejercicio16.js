//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function countdown(numero) {
    const resultado = [];
  
    for (let i = numero; i >= 0; i--) {
      resultado.push(i);
    }
    return resultado;
  }

console.log(countdown(5)); 