// 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

let a=parseInt(prompt("Coloca numero: "));
let b=parseInt(prompt("Coloca numero: "));

let mayor;

if (a>b && a>c) {
    mayor=a;
} else{
    if( b>a && b>c){
        mayor=b
    } else{
        mayor=c;
        }
    }

console.log("El mayor es: "+mayor);

