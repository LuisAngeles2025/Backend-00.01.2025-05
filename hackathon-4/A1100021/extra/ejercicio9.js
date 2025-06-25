// 9) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.

// charIndex("hello", "l") ➞ [2, 3]

// The first "l" has index 2, the last "l" has index 3.
 
const charIndex = (palabra, letra) => {
    let arrCadena = palabra.split("");
    return [arrCadena.indexOf(letra), arrCadena.lastIndexOf(letra)];
};

console.log(charIndex("hello", "l"));