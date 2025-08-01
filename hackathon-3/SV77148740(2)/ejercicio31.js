// 31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo
//  se ingresará diez números.

let numPar=0,numImpar=0,contPar=0,contImpar=0;

for(let i=0;i<10;i++){
    let num=parseInt(prompt("Coloque numero:"));
    if (num%2==0){
        numPar=numPar+num;
        contPar++;
    } else {
        numImpar=numImpar+num;
        contImpar++;
    }
}

console.log("La media de los numeros pares es: "+numPar/contPar);

console.log("La media de los impares: "+numImpar/contImpar);