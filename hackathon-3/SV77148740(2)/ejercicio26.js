// 26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

let divisor = parseInt(prompt("Coloque divisor: "));
let dividendo = parseInt(prompt("Coloque dividendo: "));

if (divisor==0){
    console.log("El divisor es invalido ");
} else {
    let cociente=0;
    let resto=dividendo;
    while(resto>=divisor){
        resto=resto - divisor
        cociente= cociente + 1
    }
    console.log("Cociente: "+cociente);
    console.log("Resto: "+resto);
}