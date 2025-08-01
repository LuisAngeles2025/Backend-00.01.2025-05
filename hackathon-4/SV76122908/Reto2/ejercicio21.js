//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: 
//"¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function findNemo(frase) {

    const palabras = frase.split(" ");
    const posicion = palabras.indexOf("Nemo");
  
    if (posicion === -1) {
      return "¡No encontré a Nemo!";
    }
    return `¡Encontré a Nemo en la posición ${posicion + 1}!`;
  }

    console.log(findNemo("I am finding Nemo !"));