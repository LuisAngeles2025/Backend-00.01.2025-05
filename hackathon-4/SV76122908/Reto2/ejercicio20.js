//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena 
//con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"

function vreplace(texto, vocal) {
    return texto.replace(/[aeiou]/gi, vocal);
  }

  console.log(vreplace("apples and bananas", "u"));// ➞ "upplus und bununus"
