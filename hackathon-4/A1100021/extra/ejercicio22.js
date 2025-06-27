// 22)	Cree una función que capitalice la última letra de cada palabra.

// capLast("hello") ➞ "hellO"

const capLast = (palabra) => {
    let arrPalabra = palabra.split("");
    arrPalabra[arrPalabra.length - 1] = arrPalabra[arrPalabra.length - 1].toUpperCase();
    return arrPalabra.join("");
};

console.log(capLast("hello"));