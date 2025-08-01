// 24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

let num =1000;

var	suma=0,cont=0

	while (cont<=num){
        if(cont%2==0){
            suma=suma+cont
        }
        cont=cont+1
    }

    console.log("La suma de los pares hasta "+num+" es:"+suma)