//Hacer un algoritmo en JavaScript para calcular la suma 
// de los números impares menores o iguales a n.

let n=parseInt(prompt('Ingrese un numero'))

let suma=0 
//if (n%2!=0){
    for (i=1; i<=n; i+=2){
        suma+=i;
    }
//}
alert("La suma de los numeros impares menores a "+n+" es de "+suma);
console.log("La suma de los impares es de "+suma);   
//num 4= 1+2+3+4=10=4
//num5 = 1+2+3+4+5=15=9
//num7 = 1+2+3+4+5+6+7=18=16
//num9 = 1+2+3+4+5+6+7+8+9=45=25
