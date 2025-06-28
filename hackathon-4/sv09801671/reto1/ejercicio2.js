//Crea una función que retorne la potencia de un número dado, 
//esta función deberá recibir la potencia y el número a 
//potenciar.

let base=parseFloat(prompt("Ingrese un numero"));
let exp=parseFloat(prompt("Ingrese u numero"));

function potenc(x,y){
    result=Math.pow(x,y);
    return result;
}
potenc(base,exp);
alert("El numero ingresado "+base+", elevado a la potencia "+exp+", da como resultado "+result);
console.log("El resultado es de "+result);