// 37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

let a = parseInt(prompt("Coloque numeros: "));
let b = parseInt(prompt("Coloque numeros: "));
let r=0;
do {
    r=a%b
    a=b
    b=r
}while(r!==0)

    console.log("El mcd es: "+a)