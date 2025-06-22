// 14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es
//  un número primo.

let num= parseInt(prompt("Coloque numero(1-9): "));

if(num>=1 && num<10){
    var cont=1, divisores=0;
    while(cont<=num){
        if(num%cont==0){
            divisores=divisores+1
        }
        cont=cont+1
    }
    if(divisores==2){
        console.log("Es primo")
    } else {
        console.log("No es primo")
    }
} else {
    console.log("No coloca entre 1 a 9")
}

