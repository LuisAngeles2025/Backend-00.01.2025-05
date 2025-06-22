// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

let num = parseInt(prompt("Colocar numero: "));

var	suma=0,cont=0

	while (cont<=num){
        if(cont%2!=0){
            suma=suma+cont
        }
        cont=cont+1
    }

    console.log("La suma de los impares hasta "+num+" es:"+suma)