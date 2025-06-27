// 21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

const findNemo = (cadena) => {
    let arrCadena = cadena.split(" ");
    let mensaje = "";
    arrCadena.forEach((item, index) => {
        if (item == "Nemo") 
            mensaje = `I found Nemo at ${index + 1}!`;
        else 
            mensaje = "I didn't find Nemo";
    });
    return mensaje;
};

console.log(findNemo("I am finding Nemo !"));