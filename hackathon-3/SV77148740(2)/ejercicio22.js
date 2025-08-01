// 22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
let num = parseInt(prompt("Colocar numero: "));
	
var suma=0,cont=1
	
	while (cont<=num) {
        suma=suma+cont,
		cont=cont+1
    }
	console.log("La suma de los primeros"+num+" primos es "+suma);