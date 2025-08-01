// 20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function(vocal) {
    
    let arrCadena = this.split("");

    if (vocal != "a" && vocal != "e" && vocal != "i" && vocal != "o" && vocal != "u") {
        throw new Error("Debes proporcionar una vocal válida (a, e, i, o, u)");
    }

    for (let i = 0; i < this.length; i++) {
        let vocalCadena = arrCadena[i].toLowerCase();
        if (vocalCadena == "a" || vocalCadena == "e" || vocalCadena == "i" || vocalCadena == "o" || vocalCadena == "u") {
            arrCadena[i] = arrCadena[i] === vocalCadena ? vocal : vocal.toUpperCase();
        }       
    }
    return arrCadena.join("");
};

console.log("apples and bananas".vreplace("u"));