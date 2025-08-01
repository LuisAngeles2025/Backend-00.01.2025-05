//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function diffMaxMin(numeros) {
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);
    const diferencia = max - min;
  
    return {
      menor: min,
      mayor: max,
      diferencia: diferencia
    };
  }
  const resultado = diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
  console.log(`Smallest number is ${resultado.menor}, biggest is ${resultado.mayor}.`);