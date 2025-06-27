//Hacer un algoritmo en JavaScript que 
// lea un entero positivo del 1 al diez
// y determine si es un número primo.


const num=parseInt(prompt('Ingrese el numero'))

function esPrimo(num) {


  if (num <= 1) return "no primo";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return "no primo"
  }
  return "primo";
}

alert("el numero "+esPrimo(num))