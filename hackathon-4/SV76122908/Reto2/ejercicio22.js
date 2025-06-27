//Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"

function capLast(texto) {

    const palabras = texto.split(" ");

    const resultado = palabras.map(palabra => {
      const longitud = palabra.length;
      if (longitud === 0) return ""; // palabra vacía
      const ultimaMayus = palabra[longitud - 1].toUpperCase();
      return palabra.slice(0, longitud - 1) + ultimaMayus;
    });
  
    return resultado.join(" ");
  }
  
  console.log(capLast("hello")); 